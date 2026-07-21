// app/careers/actions.ts
"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitApplication(prevState: any, formData: FormData) {
  try {
    const jobTitle = formData.get("jobTitle") as string;
    const department = formData.get("department") as string;
    const location = formData.get("location") as string;
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const currentCity = formData.get("currentCity") as string;
    const yearsOfExperience = formData.get("yearsOfExperience") as string;
    const coverLetter = formData.get("coverLetter") as string;
    const resumeFile = formData.get("resume") as File;

    if (!resumeFile || resumeFile.size === 0) {
      return { success: false, error: "Resume file missing or unreadable." };
    }

    // Convert file object directly to standard Buffer structure securely
    const arrayBuffer = await resumeFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const emailContent = `
      <div style="font-family: sans-serif; max-width: 600px; color: #111; line-height: 1.6;">
        <h2 style="border-bottom: 1px solid #eaeaea; padding-bottom: 12px; font-weight: 400; font-size: 20px; letter-spacing: -0.02em;">
          New Application: ${jobTitle}
        </h2>
        <p style="margin-bottom: 24px; color: #666;">A candidate has applied through the luxury careers portal.</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <tr><td style="padding: 6px 0; color: #666; width: 140px;">Role</td><strong><td>${jobTitle} (${department} - ${location})</td></strong></tr>
          <tr><td style="padding: 6px 0; color: #666;">Applicant</td><strong><td>${fullName}</td></strong></tr>
          <tr><td style="padding: 6px 0; color: #666;">Email</td><td>${email}</td></tr>
          <tr><td style="padding: 6px 0; color: #666;">Phone</td><td>${phone}</td></tr>
          <tr><td style="padding: 6px 0; color: #666;">Location</td><td>${currentCity}</td></tr>
          <tr><td style="padding: 6px 0; color: #666;">Experience</td><td>${yearsOfExperience} Years</td></tr>
        </table>

        ${
          coverLetter
            ? `
          <h3 style="font-weight: 400; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #666; margin-top: 24px;">Cover Note</h3>
          <p style="background: #f9f9f9; padding: 16px; border-left: 1px solid #111; white-space: pre-wrap; font-size: 14px;">${coverLetter}</p>
        `
            : ""
        }
      </div>
    `;

    const data = await resend.emails.send({
      from: "Careers Portal <careers@yourdomain.com>", // Replace with verified domain
      to: ["hr@yourcompany.com"],
      subject: `[Application] ${fullName} - ${jobTitle}`,
      html: emailContent,
      attachments: [
        {
          filename: resumeFile.name,
          content: buffer,
        },
      ],
    });

    if (data.error) {
      return { success: false, error: data.error.message };
    }

    return { success: true };
  } catch (error: any) {
    return {
      success: false,
      error: error.message || "An unexpected system failure occurred.",
    };
  }
}
