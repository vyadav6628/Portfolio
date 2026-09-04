import { NextResponse } from "next/server";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("resume") as File | null;

    if (!file) {
      return NextResponse.json(
        { error: "No resume file was uploaded." },
        { status: 400 },
      );
    }

    const filename = file.name.toLowerCase();
    const isPdf = filename.endsWith(".pdf");
    const isDocx = filename.endsWith(".docx");

    if (!isPdf && !isDocx && !file.type.includes("pdf") && !file.type.includes("word")) {
      return NextResponse.json(
        { error: "Resume must be a PDF or DOCX file." },
        { status: 400 },
      );
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: "Resume must be 5 MB or smaller." },
        { status: 400 },
      );
    }

    const resumeUrl = process.env.RESUME_PUBLIC_URL || "/resume/vipin-yadav-resume.pdf";

    return NextResponse.json({
      success: true,
      message: "Resume validated successfully.",
      resumeUrl,
      fileName: file.name,
      fileType: file.type || (isPdf ? "application/pdf" : "application/vnd.openxmlformats-officedocument.wordprocessingml.document"),
      fileSize: file.size,
    });
  } catch {
    return NextResponse.json(
      {
        error: "Unable to process the uploaded resume.",
      },
      { status: 500 },
    );
  }
}
