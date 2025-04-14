import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const formData = await request.json();

  const { name, organization, email, contact, help, budget } = formData;

  // Set up Nodemailer transport configuration for Gmail
  const transporter = nodemailer.createTransport({
    service: "Zoho",
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail/Zoho account
      pass: process.env.EMAIL_PASS, // Your Gmail/Zoho app-specific password
    },
  });

  // Email content for the company
  const mailToCompany = {
    from: process.env.EMAIL_USER,
    to: "company@example.com", // Company email
    subject: `New Service Request from ${name}`,
    text: `A new client has requested services:
    Name: ${name}
    Organization: ${organization}
    Email: ${email}
    Contact: ${contact}
    Help Needed: ${help}
    Budget: ${budget}`,
  };

  // Email content for the client
  const mailToClient = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Thank you for your request",
    text: `Dear ${name},\n\nThank you for your request. We will get back to you soon.`,
  };

  try {
    // Send emails
    await transporter.sendMail(mailToCompany);
    await transporter.sendMail(mailToClient);

    // Return success response for frontend
    return NextResponse.json({
      success: true,
      message: "Your request has been successfully received. We will contact you shortly.",
    });
  } catch (error) {
    console.error("Error sending email", error);

    // Return failure response for frontend
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send your request. Please try again later.",
        error,
      },
      { status: 500 }
    );
  }
}
