"use server";

import { Resend } from "resend";

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

    // Get additional job details if passed from the form
    const department =
      (formData.get("department") as string) || "Not specified";
    const location = (formData.get("location") as string) || "Not specified";
    const jobType = (formData.get("jobType") as string) || "Not specified";

    const resumeFile = formData.get("resume") as File | null;
    if (!resumeFile || resumeFile.size === 0) {
      return { success: false, error: "Resume file is required." };
    }

    const arrayBuffer = await resumeFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const fromEmail = process.env.CAREERS_FROM_EMAIL || "onboarding@resend.dev";
    const toEmail = process.env.HR_RECEIVER_EMAIL || "hr@yourcompany.com";

    console.log("📧 Sending application for:", positionTitle);
    console.log("📧 To:", toEmail);

    // Create a clean job details section
    const jobDetails = `
Position: ${positionTitle}
Job ID: ${vacancyId}
Department: ${department}
Location: ${location}
Job Type: ${jobType}
    `.trim();

    const { data, error } = await resend.emails.send({
      from: `${fullName} via Careers <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `[Application] ${positionTitle} - ${fullName}`,
      text: `
═══════════════════════════════════════════
         NEW JOB APPLICATION
═══════════════════════════════════════════

📋 JOB DETAILS
─────────────────────────────────────────
${jobDetails}

👤 CANDIDATE INFORMATION
─────────────────────────────────────────
Full Name: ${fullName}
Email: ${email}
Phone: ${phone}
Current City: ${currentCity}
Experience: ${experience} years

📝 COVER LETTER
─────────────────────────────────────────
${coverLetter || "No cover letter provided."}

📎 ATTACHMENTS
─────────────────────────────────────────
Resume: ${resumeFile.name}

═══════════════════════════════════════════
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; color: #1a1a1a; line-height: 1.6; background: #fafafa; padding: 30px; border: 1px solid #e0e0e0;">
          
          <!-- Header -->
          <div style="background: #1a1a1a; color: white; padding: 20px; text-align: center; margin-bottom: 30px;">
            <h1 style="margin: 0; font-size: 24px; font-weight: 700; letter-spacing: 1px;">NEW JOB APPLICATION</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.8; font-size: 14px;">Application Received</p>
          </div>

          <!-- Job Details Section -->
          <div style="background: white; padding: 20px; margin-bottom: 20px; border-left: 4px solid #1a1a1a;">
            <h2 style="font-size: 18px; margin: 0 0 15px 0; color: #1a1a1a;">📋 Job Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: 600; width: 120px;">Position:</td>
                <td style="padding: 8px 0;">${positionTitle}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600;">Job ID:</td>
                <td style="padding: 8px 0;">${vacancyId}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600;">Department:</td>
                <td style="padding: 8px 0;">${department}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600;">Location:</td>
                <td style="padding: 8px 0;">${location}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600;">Job Type:</td>
                <td style="padding: 8px 0;">${jobType}</td>
              </tr>
            </table>
          </div>

          <!-- Candidate Information -->
          <div style="background: white; padding: 20px; margin-bottom: 20px; border-left: 4px solid #1a1a1a;">
            <h2 style="font-size: 18px; margin: 0 0 15px 0; color: #1a1a1a;">👤 Candidate Information</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: 600; width: 120px;">Full Name:</td>
                <td style="padding: 8px 0;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #1a1a1a;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600;">Phone:</td>
                <td style="padding: 8px 0;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600;">Current City:</td>
                <td style="padding: 8px 0;">${currentCity}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600;">Experience:</td>
                <td style="padding: 8px 0;">${experience} years</td>
              </tr>
            </table>
          </div>

          <!-- Cover Letter -->
          ${
            coverLetter
              ? `
          <div style="background: white; padding: 20px; margin-bottom: 20px; border-left: 4px solid #1a1a1a;">
            <h2 style="font-size: 18px; margin: 0 0 15px 0; color: #1a1a1a;">📝 Cover Letter</h2>
            <div style="background: #f8f8f8; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${coverLetter}</div>
          </div>
          `
              : ""
          }

          <!-- Attachment -->
          <div style="background: white; padding: 20px; border-left: 4px solid #1a1a1a;">
            <h2 style="font-size: 18px; margin: 0 0 15px 0; color: #1a1a1a;">📎 Attachment</h2>
            <p style="margin: 0;"><strong>Resume:</strong> ${resumeFile.name}</p>
          </div>

          <!-- Footer -->
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 2px solid #e0e0e0; font-size: 12px; color: #666;">
            <p>This application was submitted through the careers portal.</p>
            <p style="margin: 5px 0 0 0;">Generated on: ${new Date().toLocaleString()}</p>
          </div>
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
