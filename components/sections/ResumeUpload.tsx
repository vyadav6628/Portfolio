"use client";

import { AnimatePresence, motion } from "framer-motion";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import {
  BriefcaseBusiness,
  Check,
  Download,
  FileText,
  Link,
  Mail,
  MapPin,
  Phone,
  UploadCloud,
  X,
} from "lucide-react";
import { useRef, useState } from "react";

const MAX_SIZE = 5 * 1024 * 1024;
const ACCEPTED_TYPES = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/msword",
];

const resumeData = {
  personal: {
    name: "Vipin Yadav",
    title: "Software Engineer",
    location: "Lucknow, Uttar Pradesh 226016",
    phone: "+91 6387997585",
    email: "vyadav6616188@gmail.com",
    linkedin: "https://www.linkedin.com/in/vipin-yadav",
  },
  summary:
    "I am a software engineer with over 5.5+ years of experience in .Net Core, C#, SQL, Angular, and Microservices. I specialize in backend development, API design, and database optimization and have worked on various domains including College Management System, Hospital Management System, Document Management, and Citizen Centric. I enjoy solving complex problems, optimizing performance, and implementing scalable solutions.",
  skills: [
    {
      title: "Frontend",
      items: [
        "Angular (v16–v20)",
        "React.js",
        "RxJS",
        "JavaScript",
        "jQuery",
        "AJAX",
        "Razor Pages",
      ],
    },
    {
      title: "Backend & Security",
      items: [
        ".NET Core 10/9/8/7",
        "ASP.NET MVC",
        "C#",
        "EF Core",
        "Dapper",
        "LINQ",
        "ADO.NET",
        "Windows Services",
        "Auth0",
        "MFA",
        "JWT",
        "SSO",
      ],
    },
    {
      title: "Database",
      items: ["MS SQL", "MySQL"],
    },
    {
      title: "Architecture & Patterns",
      items: ["Microservices", "N-Tier Architecture"],
    },
    {
      title: "Cloud & DevOps",
      items: [
        "AWS (EC2, S3, SES)",
        "Azure (DevOps, Blob)",
        "CI/CD (CodePipeline, GitHub Actions)",
        "IIS",
        "Docker",
        "Kubernetes",
      ],
    },
    {
      title: "Tools & Observability",
      items: [
        "AutoMapper",
        "Quartz",
        "Serilog",
        "SonarQube",
        "Sentry",
        "GitHub CodeQL",
        "Power BI",
        "Postman",
        "Git",
        "Azure Boards",
        "JIRA",
      ],
    },
    {
      title: "AI Productivity",
      items: [
        "GitHub Copilot",
        "Cursor",
        "Claude AI",
        "ChatGPT",
        "OpenAI API",
      ],
    },
    {
      title: "Professional Competencies",
      items: [
        "Effective Communication",
        "Team Collaboration",
        "Analytical Thinking",
        "Problem Solving",
        "Time Management",
      ],
    },
    {
      title: "Certification",
      items: ["AWS Solutions Architect – Associate (SAA-C03, In Progress)"],
    },
  ],
  experience: [
    {
      company: "Omninet Technologies, Lucknow",
      role: "Software Engineer, Full Stack",
      period: "July 2023 – Present",
      responsibilities: [
        "Designed and implemented the LU Exam Post system to streamline result processing at Lucknow University.",
        "Developed automated result computation and grading mechanisms.",
        "Configured student and faculty portals for results and academic records.",
        "Integrated online exam form submission and hall ticket generation.",
        "Enhanced security using encrypted login and role-based access control.",
        "Implemented real-time examination notifications and updates.",
        "Developed faculty dashboard functionality for evaluation, validation, and grade corrections.",
        "Established helpdesk support functionality for students and faculty.",
      ],
      stack: [
        "Angular 20",
        ".NET Core 10",
        "MSSQL",
        "Dapper",
        "EF Core",
        "JWT",
        "Auth0",
        "ASP.NET MVC",
        "Serilog",
        "Windows Service",
        "IIS",
        "SVN",
        "GitHub",
      ],
    },
    {
      company: "Fiables Solutions Private Limited, Lucknow",
      role: "Software Engineer, Full Stack",
      period: "Oct 2021 – July 2023",
      responsibilities: [
        "Diagnosed and resolved database and software performance issues.",
        "Conducted vulnerability patching and mitigated system weaknesses.",
        "Addressed hardware and software compatibility challenges.",
        "Monitored database performance.",
        "Managed analysis, design, and testing phases of the SDLC.",
        "Collaborated with customers, managers, and end-users.",
        "Designed, developed, and optimized web and database applications.",
        "Tuned systems for improved performance and efficiency.",
        "Implemented engineering best practices.",
        "Developed database architectures and table structures.",
      ],
      stack: [
        "Angular 12/16",
        ".NET Core 6/7",
        "MySQL",
        "Dapper",
        "EF Core",
        "JWT",
        "ASP.NET MVC",
        "Serilog",
        "GitHub",
      ],
    },
    {
      company: "Soft One Global, Lucknow",
      role: "Software Developer",
      period: "Mar 2021 – Sep 2021",
      responsibilities: [
        "Troubleshot database and software performance issues.",
        "Corrected, modified, and upgraded software.",
        "Analyzed requirements and generated logic for new systems and tests.",
        "Built databases and table structures for web applications.",
      ],
      stack: [],
    },
    {
      company: "Mecatredz Technology, Lucknow",
      role: "Apprenticeship Trainee",
      period: "Sep 2020 – Mar 2021",
      responsibilities: [
        "Collaborated with team members to complete code projects on time.",
        "Learned software design best practices.",
        "Worked with developers to identify and remove software bugs.",
      ],
      stack: [],
    },
  ],
  projects: [
    {
      title: "LU_Exam_Post",
      subtitle: "Lucknow University Result Processing System",
      period: "July 2023 – Present",
      team: "4",
      domain: "Lucknow University",
      features: [
        "Student Master",
        "Course Master",
        "Subject Master",
        "Paper Master",
        "Examination Master",
        "Result Processing",
        "Grading",
        "Re-evaluation",
        "Supplementary Exams",
        "Dynamic Result Publishing",
        "Approval Configuration",
        "Error Checking",
        "Exam Scheduling",
        "Scorecards",
        "Transcripts",
        "Analytics",
      ],
      stack: [
        "Angular 20",
        ".NET Core 10",
        "ASP.NET MVC",
        "MSSQL",
        "Dapper",
        "EF Core",
        "JWT",
        "Auth0",
        "Serilog",
        "Windows Service",
        "SVN",
      ],
    },
    {
      title: "Citizen Centric Portal",
      subtitle: "",
      period: "12 Months",
      team: "6",
      domain: "Karnataka State Police",
      features: [
        "Senior Citizen Registration",
        "Locked Home Information",
        "eFIR",
        "Vehicle Theft Information",
      ],
      stack: [
        "Angular 14",
        ".NET Core 6",
        "MySQL",
        "Dapper",
        "EF Core",
        "LINQ",
        "JWT",
        "Quartz",
        "Serilog",
        "Git",
        "IIS",
      ],
    },
    {
      title: "Document Management System",
      subtitle: "",
      period: "6 Months",
      team: "6",
      domain: "Document Management",
      features: [],
      stack: [
        "Angular 13",
        ".NET Core 6",
        "MySQL",
        "Dapper",
        "EF Core",
        "LINQ",
        "JWT",
        "Serilog",
        "Quartz",
        "Git",
        "IIS",
      ],
    },
    {
      title: "docEDGG — Hospital Management System",
      subtitle: "",
      period: "12 Months",
      team: "6",
      domain: "Hospital Management",
      features: [
        "Patient Registration",
        "Appointments",
        "Doctor Consultation",
        "Medical Records",
        "Pathology",
        "Day Care",
        "ICU",
        "OT",
        "Department Integration",
        "SMS and Email Notifications",
        "Hospital Automation",
      ],
      stack: [
        "ASP.NET MVC",
        "MySQL",
        "EF Core",
        "jQuery",
        "JSON",
        "AJAX",
        "LINQ",
        "JWT",
        "Serilog",
        "Quartz",
        "IIS",
      ],
    },
  ],
  education: [
    {
      degree: "Master in Computer Applications",
      description: "Computer Science and Programming",
      period: "June 2025 – Pursuing",
      institution: "Integral University, Lucknow, India",
    },
    {
      degree: "Bachelor in Computer Applications",
      description: "Computer Science and Programming",
      period: "Aug 2022 – June 2025",
      institution: "Integral University, Lucknow, India",
    },
    {
      degree: "3 Year Diploma",
      description: "Computer Science & Engineering",
      period: "Jul 2017 – Jun 2020",
      institution: "Government Polytechnic Jaunpur, India",
    },
  ],
};

function ResumeSectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <h2 className="text-[10px] font-bold uppercase tracking-[0.24em] text-teal-700">{title}</h2>
      <div className="h-px flex-1 bg-slate-300" />
    </div>
  );
}

function ResumeHeader() {
  return (
    <header className="mb-7 border-b border-slate-300 pb-5">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h1 className="text-[24px] font-bold uppercase tracking-tight text-slate-900">
            {resumeData.personal.name}
          </h1>
          <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.18em] text-teal-700">
            {resumeData.personal.title}
          </p>
        </div>

        <div className="flex flex-col items-start gap-1.5 text-[11px] text-slate-700">
          <div className="flex items-center gap-2">
            <MapPin size={12} className="text-teal-700" />
            <span>{resumeData.personal.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={12} className="text-teal-700" />
            <a href={`tel:${resumeData.personal.phone}`} className="hover:text-teal-700">
              {resumeData.personal.phone}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={12} className="text-teal-700" />
            <a href={`mailto:${resumeData.personal.email}`} className="hover:text-teal-700">
              {resumeData.personal.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Link size={12} className="text-teal-700" />
            <a href={resumeData.personal.linkedin} target="_blank" rel="noreferrer" className="hover:text-teal-700">
              www.linkedin.com/in/vipin-yadav
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function SummarySection() {
  return (
    <section className="mb-6">
      <ResumeSectionHeading title="Summary" />
      <p className="text-[11px] leading-5 text-slate-700">{resumeData.summary}</p>
    </section>
  );
}

function SkillsSection() {
  return (
    <section className="mb-6">
      <ResumeSectionHeading title="Technical Skills" />
      <div className="space-y-3">
        {resumeData.skills.map((group) => (
          <div key={group.title} className="flex flex-col gap-1 text-[10px] text-slate-700 sm:flex-row">
            <span className="min-w-[140px] font-semibold text-slate-800">{group.title}:</span>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-2 py-0.5 text-[10px] text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="mb-6">
      <ResumeSectionHeading title="Work Experience" />
      <div className="space-y-5">
        {resumeData.experience.map((item) => (
          <div key={`${item.company}-${item.period}`} className="space-y-2">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-[12px] font-bold uppercase tracking-[0.08em] text-slate-900">
                  {item.company}
                </h3>
                <p className="mt-1 text-[11px] font-medium text-slate-700">{item.role}</p>
              </div>
              <span className="text-[10px] font-medium text-slate-600">{item.period}</span>
            </div>

            <ul className="space-y-1.5 pl-4 text-[10px] leading-4 text-slate-700">
              {item.responsibilities.map((responsibility) => (
                <li key={responsibility} className="list-disc marker:text-teal-700">
                  {responsibility}
                </li>
              ))}
            </ul>

            {item.stack.length > 0 ? (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-300 bg-slate-50 px-2 py-0.5 text-[9px] font-medium text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className="mb-6">
      <ResumeSectionHeading title="Key Projects" />
      <div className="space-y-5">
        {resumeData.projects.map((project) => (
          <div key={project.title} className="space-y-2">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-[12px] font-bold uppercase tracking-[0.08em] text-slate-900">
                  {project.title}
                </h3>
                {project.subtitle ? (
                  <p className="mt-1 text-[11px] font-medium text-teal-700">{project.subtitle}</p>
                ) : null}
              </div>
              <span className="text-[10px] text-slate-600">{project.period}</span>
            </div>

            <div className="text-[10px] text-slate-700">
              <span className="font-semibold text-slate-800">Team:</span> {project.team} &nbsp;|&nbsp;
              <span className="font-semibold text-slate-800">Domain:</span> {project.domain}
            </div>

            {project.features.length > 0 ? (
              <ul className="grid grid-cols-2 gap-1 pl-4 text-[10px] leading-4 text-slate-700">
                {project.features.map((feature) => (
                  <li key={feature} className="list-disc marker:text-teal-700">
                    {feature}
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="mt-2 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-300 bg-slate-50 px-2 py-0.5 text-[9px] font-medium text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section>
      <ResumeSectionHeading title="Education" />
      <div className="space-y-3">
        {resumeData.education.map((entry) => (
          <div key={entry.degree} className="space-y-1">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-[12px] font-bold text-slate-900">{entry.degree}</h3>
                <p className="text-[10px] text-slate-700">{entry.description}</p>
              </div>
              <span className="text-[10px] text-slate-600">{entry.period}</span>
            </div>
            <p className="text-[10px] text-slate-700">{entry.institution}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ResumeDocument() {
  return (
    <article id="vipin-resume-pdf" className="resume-document mx-auto bg-white px-5 py-6 text-slate-800 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
      <ResumeHeader />
      <SummarySection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
    </article>
  );
}

function DownloadResumeButton() {
  const downloadResume = async () => {
    const node = document.getElementById("vipin-resume-pdf");

    if (!node) {
      return;
    }

    const canvas = await html2canvas(node, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
      scrollX: 0,
      scrollY: 0,
      windowWidth: node.scrollWidth,
      windowHeight: node.scrollHeight,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgProps = pdf.getImageProperties(imgData);
    const pageHeight = (imgProps.height * pdfWidth) / imgProps.width;
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pageHeight, undefined, "FAST");

    if (pageHeight > pdfHeight) {
      let remaining = pageHeight - pdfHeight;
      while (remaining > 0) {
        position = remaining - pageHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pageHeight, undefined, "FAST");
        remaining -= pdfHeight;
      }
    }

    pdf.save("Vipin_Yadav_Resume.pdf");
  };

  return (
    <button
      type="button"
      onClick={downloadResume}
      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 px-5 py-3 text-sm font-medium text-white shadow-[0_12px_28px_rgba(13,148,136,0.28)] transition hover:-translate-y-0.5"
    >
      <Download size={16} />
      Download Resume PDF
    </button>
  );
}

export function ResumeUpload() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "uploading" | "success" | "error">("idle");
  const [progress, setProgress] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const validateFile = (file: File) => {
    const extension = file.name.split(".").pop()?.toLowerCase();
    const isAcceptedType = ACCEPTED_TYPES.includes(file.type) || extension === "pdf" || extension === "docx";

    if (!isAcceptedType) {
      return "Please upload a PDF or DOCX document.";
    }

    if (file.size > MAX_SIZE) {
      return "File must be smaller than 5 MB.";
    }

    return "";
  };

  const startUpload = (file: File) => {
    const validation = validateFile(file);

    if (validation) {
      setErrorMessage(validation);
      setStatus("error");
      return;
    }

    setSelectedFile(file);
    setErrorMessage("");
    setStatus("uploading");
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((current) => {
        if (current >= 100) {
          clearInterval(interval);
          setStatus("success");
          return 100;
        }

        return current + 12;
      });
    }, 100);
  };

  const onFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) startUpload(file);
  };

  const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files?.[0];
    if (file) startUpload(file);
  };

  const clearSelection = () => {
    setSelectedFile(null);
    setStatus("idle");
    setProgress(0);
    setErrorMessage("");
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <section id="resume" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-[32px] border border-slate-200 bg-slate-50/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-8 dark:border-slate-700 dark:bg-slate-900/40">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-teal-700 dark:text-teal-300">
              Resume & Professional Profile
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">
              Professional Resume
            </h2>
          </div>
          <div className="resume-page-actions">
            <DownloadResumeButton />
          </div>
        </div>

        <div className="grid gap-8 xl:grid-cols-[360px_1fr]">
          <div className="resume-upload-panel rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900/60">
            <div
              onDragOver={(event) => {
                event.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={onDrop}
              className={`rounded-[22px] border border-dashed p-6 text-center transition ${
                isDragging
                  ? "border-teal-500 bg-teal-50 dark:bg-teal-500/5"
                  : "border-slate-300 bg-slate-50 dark:border-slate-600 dark:bg-slate-800/50"
              }`}
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-teal-200 bg-teal-50 text-teal-700 dark:border-teal-700/40 dark:bg-teal-500/10 dark:text-teal-300">
                <UploadCloud size={24} />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-white">Upload Resume</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Drag & drop your PDF or DOCX here or click to browse.
              </p>

              <button
                type="button"
                onClick={() => inputRef.current?.click()}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 px-5 py-3 text-sm font-medium text-white"
              >
                <UploadCloud size={16} />
                Browse file
              </button>

              <input
                ref={inputRef}
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={onFileSelect}
              />

              <p className="mt-4 text-[10px] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                PDF / DOCX • Max 5 MB
              </p>

              {status === "error" ? (
                <p className="mt-4 text-sm text-rose-500">{errorMessage}</p>
              ) : null}

              {status !== "idle" ? (
                <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left dark:border-slate-700 dark:bg-slate-800/60">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700 dark:bg-teal-500/10 dark:text-teal-300">
                        <FileText size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900 dark:text-white">
                          {selectedFile ? selectedFile.name : "vipin-yadav-resume.pdf"}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {selectedFile ? `${(selectedFile.size / 1024 / 1024).toFixed(2)} MB` : "PDF • 0.00 MB"}
                        </p>
                      </div>
                    </div>

                    {status === "success" ? (
                      <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-300">
                        <Check size={16} />
                        Uploaded
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={clearSelection}
                        className="text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                      >
                        <X size={16} />
                      </button>
                    )}
                  </div>

                  <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      className="h-full rounded-full bg-gradient-to-r from-teal-500 via-cyan-600 to-blue-600"
                    />
                  </div>
                </div>
              ) : null}
            </div>

            <AnimatePresence>
              {selectedFile && status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-6 rounded-[20px] border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/60"
                >
                  <div className="grid gap-3 text-sm text-slate-700 dark:text-slate-200">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                        File name
                      </span>
                      <p className="mt-2 text-slate-900 dark:text-white">{selectedFile.name}</p>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                        File type
                      </span>
                      <p className="mt-2 text-slate-900 dark:text-white">{selectedFile.type || "PDF"}</p>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                        File size
                      </span>
                      <p className="mt-2 text-slate-900 dark:text-white">
                        {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          <div className="resume-preview-panel rounded-[28px] border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-700 dark:bg-slate-900/60">
            <div className="mb-3 flex items-center justify-between gap-3 text-slate-800 dark:text-slate-200">
              <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em]">
                <BriefcaseBusiness size={14} className="text-teal-700 dark:text-teal-300" />
                Resume Preview
              </div>
              <div className="hidden md:block">
                <DownloadResumeButton />
              </div>
            </div>

            <div className="overflow-auto rounded-[22px] border border-slate-200 bg-slate-100 p-3 dark:border-slate-700 dark:bg-slate-950/50">
              <ResumeDocument />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
