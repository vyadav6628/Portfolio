import { NextResponse } from "next/server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body ?? {};

    const errors: Record<string, string> = {};

    if (!name || String(name).trim().length < 2) {
      errors.name = "Please enter your name.";
    }

    if (!email || !EMAIL_REGEX.test(String(email))) {
      errors.email = "Please enter a valid email address.";
    }

    if (!subject || String(subject).trim().length < 3) {
      errors.subject = "Please enter a subject.";
    }

    if (!message || String(message).trim().length < 10) {
      errors.message = "Please include a meaningful message.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          error: "Validation failed.",
          details: errors,
        },
        { status: 400 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Thanks for reaching out. Your message has been received and will be reviewed.",
    });
  } catch {
    return NextResponse.json(
      {
        error: "Something went wrong while submitting your message.",
      },
      { status: 500 },
    );
  }
}
