"use server";

import { Resend } from "resend";

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitApplication(formData: FormData) {
  try {
    // Extract form data
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
      return { success: false, error: "Resume file is required." };
    }

    // Convert file to buffer
    const arrayBuffer = await resumeFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Get email addresses from environment
    const fromEmail = process.env.CAREERS_FROM_EMAIL || "onboarding@resend.dev";
    const toEmail = process.env.HR_RECEIVER_EMAIL || "your-email@example.com";

    console.log("📧 Sending application to:", toEmail);

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: `${fullName} via Careers <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `[Application] ${positionTitle} - ${fullName}`,
      text: `
        New Job Application Received
        ----------------------------
        Position: ${positionTitle} (ID: ${vacancyId})
        Applicant: ${fullName}
        Email: ${email}
        Phone: ${phone}
        Current Location: ${currentCity}
        Experience: ${experience} years
        
        Cover Letter:
        ${coverLetter || "None provided."}
      `,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #111; line-height: 1.6;">
          <h2 style="font-family: serif; border-bottom: 1px solid #eee; padding-bottom: 10px;">New Application Filed</h2>
          <p><strong>Position Applied:</strong> ${positionTitle} (${vacancyId})</p>
          <p><strong>Candidate Name:</strong> ${fullName}</p>
          <p><strong>Email Address:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Current Location:</strong> ${currentCity}</p>
          <p><strong>Experience:</strong> ${experience} Years</p>
          ${coverLetter ? `<br/><strong>Cover Letter:</strong><p style="background: #f9f9f9; padding: 12px; border-left: 2px solid #111;">${coverLetter.replace(/\n/g, "<br/>")}</p>` : ""}
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
    });

    if (error) {
      console.error("❌ Resend error:", error);
      return {
        success: false,
        error: error.message || "Failed to send application",
      };
    }

    console.log("✅ Application sent successfully!");
    return { success: true };
  } catch (error: any) {
    console.error("❌ Submission error:", error);
    return {
      success: false,
      error: error.message || "Failed to submit application",
    };
  }
}
