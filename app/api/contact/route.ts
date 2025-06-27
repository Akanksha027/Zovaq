import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    
    if (data.userType === "Newsletter" && data.email) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: "New Newsletter Subscription",
        text: `Email: ${data.email} has subscribed to the newsletter!`,
      };
      await transporter.sendMail(mailOptions);

      return NextResponse.json({ message: "Subscription email sent successfully!" }, { status: 200 });
    }

    // Regular contact form handling
    const { fullName, city, userType, email, subject, number, message } = data;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission: ${subject || "No Subject"}`,
      text: `
        Name: ${fullName}
        City: ${city}
        User Type: ${userType}
        Email: ${email}
        Number: ${number}
        Message: ${message}
      `,
    };
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
