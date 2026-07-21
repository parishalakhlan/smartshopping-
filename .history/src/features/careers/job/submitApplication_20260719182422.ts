"use server";

import nodemailer from "nodemailer";

export async function submitApplication(formData: FormData) {
  try {
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const currentCity = formData.get("currentCity") as string;
    const experience = formData.get("experience") as string;
    const coverLetter = formData.get("coverLetter") as string;
    const positionTitle = formData.get("positionTitle") as string;
    const vacancyId = formData.get("vacancyId") as string;

    const resumeFile = formData.get("resume") as File | null;
    if (!resumeFile || resumeFile.size === 0) {
      return {
        success: false,
        error: "Resume file payload is missing or invalid.",
      };
    }

    // Convert file arrayBuffer to Node Buffer safely
    const arrayBuffer = await resumeFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Secure server-side credential evaluation
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.resend.com",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER || "resend",
        pass: process.env.SMTP_PASSWORD, // Add this to your local ecosystem .env.local
      },
    });

    const mailOptions = {
      from: process.env.CAREERS_FROM_EMAIL || "careers@yourbrand.com",
      to: process.env.HR_RECEIVER_EMAIL || "hr@yourbrand.com",
      subject: `[Application] ${positionTitle} - ${fullName}`,
      replyTo: email,
      text: `
        New Job Application Received
        ----------------------------
        Position: ${positionTitle} (ID: ${vacancyId})
        Applicant: ${fullName}
        Email: ${email}
        Phone: ${phone}
        Current Location: ${currentCity}
        Experience: ${experience} years
        
        Cover Letter Statement:
        ${coverLetter || "None provided."}
      `,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #111; line-height: 1.6;">
          <h2 style="font-family: serif; border-b: 1px solid #eee; padding-bottom: 10px;">New Application Filed</h2>
          <p><strong>Position Applied:</strong> ${positionTitle} (${vacancyId})</p>
          <p><strong>Candidate Name:</strong> ${fullName}</p>
          <p><strong>Email Address:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Current Location:</strong> ${currentCity}</p>
          <p><strong>Experience:</strong> ${experience} Years</p>
          ${coverLetter ? `<br/><strong>Cover Letter Statement:</strong><p style="background: #f9f9f9; padding: 12px; border-left: 2px solid #111;">${coverLetter.replace(/\n/g, "<br/>")}</p>` : ""}
        </div>
      `,
      attachments: [
        {
          filename:
            resumeFile.name || `${fullName.replace(/\s+/g, "_")}_Resume.pdf`,
          content: buffer,
          contentType: "application/pdf",
        },
      ],
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error: any) {
    console.error("Mail Dispatch Failure:", error);
    return {
      success: false,
      error: error.message || "Failed to route application payload.",
    };
  }
}
