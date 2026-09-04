"use client";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Download, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

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
    "Software engineer with 5.5+ years of experience in .NET Core, C#, SQL, Angular, and Microservices. Specialized in backend development, API design, and database optimization. Worked across enterprise applications in education, healthcare, document management, and public service domains. Focused on building scalable solutions, improving performance, and delivering maintainable software that solves real business problems.",
  skills: [
    {
      title: "FRONTEND",
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
      title: "BACKEND",
      items: [
        ".NET Core 10/9/8/7",
        "ASP.NET MVC",
        "C#",
        "EF Core",
        "Dapper",
        "LINQ",
        "ADO.NET",
      ],
    },
    {
      title: "SECURITY",
      items: ["Auth0", "MFA", "JWT", "SSO"],
    },
    {
      title: "DATABASE",
      items: ["MS SQL", "MySQL"],
    },
    {
      title: "ARCHITECTURE",
      items: ["Microservices", "N-Tier Architecture"],
    },
    {
      title: "CLOUD & DEVOPS",
      items: [
        "AWS EC2",
        "AWS S3",
        "AWS SES",
        "Azure DevOps",
        "Azure Blob",
        "Docker",
        "Kubernetes",
        "IIS",
        "CI/CD",
      ],
    },
    {
      title: "TOOLS",
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
        "JIRA",
        "Azure Boards",
      ],
    },
    {
      title: "AI PRODUCTIVITY",
      items: ["GitHub Copilot", "Cursor", "Claude AI", "ChatGPT", "OpenAI API"],
    },
    {
      title: "PROFESSIONAL",
      items: [
        "Effective Communication",
        "Team Collaboration",
        "Analytical Thinking",
        "Problem Solving",
        "Time Management",
      ],
    },
    {
      title: "CERTIFICATION",
      items: ["AWS Solutions Architect – Associate (SAA-C03) — In Progress"],
    },
  ],
  experience: [
    {
      company: "Omninet Technologies, Lucknow",
      role: "Software Engineer, Full Stack",
      period: "July 2023 – Present",
      responsibilities: [
        "Developed and maintained the <strong>LU Exam Post</strong> platform for Lucknow University to streamline result processing and academic operations.",
        "Built automated result computation, grading, hall ticket generation, and academic record workflows to reduce manual effort and improve accuracy.",
        "Configured student and faculty portals for exam submissions, validations, result access, and grade correction processes.",
        "Implemented secure authentication, role-based access control, and real-time notifications for a smoother exam experience.",
      ],
      stack: [
        "Angular 20",
        ".NET Core 10",
        "MSSQL",
        "Dapper",
        "EF Core",
        "JWT",
        "Auth0",
        "Serilog",
        "IIS",
        "GitHub",
      ],
    },
    {
      company: "Fiables Solutions Private Limited, Lucknow",
      role: "Software Engineer, Full Stack",
      period: "Oct 2021 – July 2023",
      responsibilities: [
        "Diagnosed and resolved application, database, and software performance issues to maintain high availability and reliability.",
        "Conducted vulnerability patching and compatibility remediation across enterprise systems and database-driven applications.",
        "Managed analysis, design, testing, and optimization activities throughout the SDLC while collaborating with customers and end-users.",
        "Designed, developed, and tuned web and database applications using structured engineering practices and scalable architecture.",
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
        "Troubleshot database and software performance issues to improve stability and reduce defects.",
        "Corrected, modified, and upgraded software modules to align with new requirements and business needs.",
        "Analyzed requirements and created logic for new systems, tests, and deployment-ready modules using structured design practices.",
        "Built database structures and table designs to support efficient web application development.",
      ],
      stack: [],
    },
    {
      company: "Mecatredz Technology, Lucknow",
      role: "Apprenticeship Trainee",
      period: "Sep 2020 – Mar 2021",
      responsibilities: [
        "Worked with team members to complete project assignments and coding tasks within schedule.",
        "Learned software design best practices and production-oriented development standards.",
        "Assisted in debugging and resolving issues while building hands-on experience in software development workflows.",
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
      summary:
        "University result processing application designed to streamline exam and result operations with role-based access, secure workflows, and automated evaluation processes.",
      features: [
        "Student master, course master, subject master, paper master, and examination master",
        "Result processing, grading, re-evaluation, supplementary examinations, and dynamic result publishing",
        "Approval configuration, error checking, exam scheduling, scorecards, transcripts, and analytics",
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
      subtitle: "Karnataka State Police",
      period: "12 Months",
      team: "6",
      domain: "Karnataka State Police",
      summary:
        "Public-facing service portal to support citizen-related services and police workflows with secure access and streamlined case records.",
      features: [
        "Senior citizen registration, locked home information, eFIR, and vehicle theft reporting",
        "Citizen-related queries and service workflows to improve public accessibility and transparency",
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
      subtitle: "Enterprise Document Workflow",
      period: "6 Months",
      team: "6",
      domain: "Document Management",
      summary:
        "Document management application for handling digital document workflows, secure access, and structured business documentation processing.",
      features: [
        "Document lifecycle management with structured storage and workflow handling",
      ],
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
      title: "docEDGG",
      subtitle: "Hospital Management System",
      period: "12 Months",
      team: "6",
      domain: "Hospital Management",
      summary:
        "Healthcare management application for streamlining patient workflows, clinical operations, and departmental coordination across the hospital system.",
      features: [
        "Patient registration, appointments, doctor consultation, medical records, pathology, and day care operations",
        "ICU, OT, department integration, SMS, email notifications, and hospital automation workflows",
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
      description: "Computer Science And Programming",
      period: "June 2025 – Pursuing",
      institution: "Integral University - Lucknow, India",
    },
    {
      degree: "Bachelor in Computer Applications",
      description: "Computer Science And Programming",
      period: "Aug 2022 – June 2025",
      institution: "Integral University - Lucknow, India",
    },
    {
      degree: "3 Year Diploma",
      description: "Computer Science & Engineering",
      period: "Jul 2017 - Jun 2020",
      institution: "Government Polytechnic Jaunpur, India",
    },
  ],
};

function ResumeSectionHeading({ title }: { title: string }) {
  return (
    <div className="resume-section-heading">
      <h2>{title}</h2>
      <span className="resume-section-line" />
    </div>
  );
}

function ResumeHeader() {
  return (
    <header className="resume-header">
      <div className="resume-header-main">
        <h1>{resumeData.personal.name}</h1>
        <div className="resume-role">{resumeData.personal.title}</div>
        <div className="resume-tagline">
          .NET Core | C# | Angular | React | SQL | Microservices
        </div>
      </div>

      <div className="resume-contact">
        <div className="resume-contact-item">
          <MapPin size={12} />
          <span>{resumeData.personal.location}</span>
        </div>
        <div className="resume-contact-item">
          <Phone size={12} />
          <a href={`tel:${resumeData.personal.phone}`}>{resumeData.personal.phone}</a>
        </div>
        <div className="resume-contact-item">
          <Mail size={12} />
          <a href={`mailto:${resumeData.personal.email}`}>{resumeData.personal.email}</a>
        </div>
        <div className="resume-contact-item">
          <ExternalLink size={12} />
          <a href={resumeData.personal.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}

function SummarySection() {
  return (
    <section className="resume-section">
      <ResumeSectionHeading title="Summary" />
      <p className="resume-summary">{resumeData.summary}</p>
    </section>
  );
}

function SkillsSection() {
  return (
    <section className="resume-section resume-section-compact">
      <ResumeSectionHeading title="Technical Skills" />
      <div className="resume-skills">
        {resumeData.skills.map((group) => (
          <div key={group.title} className="resume-skill-row">
            <span className="resume-skill-label">{group.title}</span>
            <span className="resume-skill-items">
              {group.items.join(" · ")}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="resume-section">
      <ResumeSectionHeading title="Experience" />
      <div className="resume-experience-list">
        {resumeData.experience.map((item) => (
          <div key={`${item.company}-${item.period}`} className="resume-experience-item">
            <div className="resume-row">
              <div className="resume-entity-block">
                <h3>{item.company}</h3>
                <p>{item.role}</p>
              </div>
              <span className="resume-date">{item.period}</span>
            </div>

            <ul className="resume-bullets">
              {item.responsibilities.map((responsibility) => (
                <li key={responsibility}>
                  <span dangerouslySetInnerHTML={{ __html: responsibility }} />
                </li>
              ))}
            </ul>

            {item.stack.length > 0 ? (
              <div className="resume-tech-line">
                <span>Stack:</span>
                <span>{item.stack.join(" · ")}</span>
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
    <section className="resume-section">
      <ResumeSectionHeading title="Key Projects" />
      <div className="resume-projects-list">
        {resumeData.projects.map((project) => (
          <div key={project.title} className="resume-project-item">
            <div className="resume-row">
              <div className="resume-entity-block">
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
              </div>
              <span className="resume-date">{project.period}</span>
            </div>

            <div className="resume-meta-line">
              <span>Team: {project.team}</span>
              <span>Domain: {project.domain}</span>
            </div>

            <p className="resume-project-summary">{project.summary}</p>

            <div className="resume-project-features">
              {project.features.map((feature) => (
                <div key={feature} className="resume-project-feature">
                  • {feature}
                </div>
              ))}
            </div>

            <div className="resume-tech-line">
              <span>Technology:</span>
              <span>{project.stack.join(" · ")}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section className="resume-section">
      <ResumeSectionHeading title="Education" />
      <div className="resume-education-list">
        {resumeData.education.map((entry) => (
          <div key={`${entry.degree}-${entry.period}`} className="resume-education-item">
            <div className="resume-row">
              <div className="resume-entity-block">
                <h3>{entry.degree}</h3>
                <p>{entry.description}</p>
              </div>
              <span className="resume-date">{entry.period}</span>
            </div>
            <p className="resume-institution">{entry.institution}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ResumeDocument() {
  return (
    <article id="vipin-resume-document" className="resume-document">
      <ResumeHeader />
      <SummarySection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
    </article>
  );
}

export function ResumePage() {
  const [status, setStatus] = useState<"idle" | "generating" | "success" | "error">("idle");

  const handleDownloadResume = async () => {
    try {
      setStatus("generating");
      const targetElement = document.getElementById("vipin-resume-document");

      if (!targetElement) {
        setStatus("error");
        return;
      }

      const canvas = await html2canvas(targetElement, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        scrollX: 0,
        scrollY: 0,
        windowWidth: targetElement.scrollWidth,
        windowHeight: targetElement.scrollHeight,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const contentWidth = canvas.width;
      const contentHeight = canvas.height;
      const scaledHeight = (contentHeight * pdfWidth) / contentWidth;
      const pageCount = Math.ceil(scaledHeight / pdfHeight);

      let currentY = 0;
      for (let page = 0; page < pageCount; page += 1) {
        if (page > 0) {
          pdf.addPage();
        }

        const sourceY = page * (contentHeight / pageCount);
        const sourceHeight = Math.min(contentHeight - sourceY, contentHeight / pageCount);
        const pageCanvas = document.createElement("canvas");
        pageCanvas.width = canvas.width;
        pageCanvas.height = Math.ceil(sourceHeight * (canvas.width / contentWidth));
        const ctx = pageCanvas.getContext("2d");

        if (!ctx) {
          throw new Error("Canvas rendering failed.");
        }

        ctx.drawImage(
          canvas,
          0,
          sourceY,
          contentWidth,
          sourceHeight,
          0,
          0,
          pageCanvas.width,
          pageCanvas.height
        );

        const pageImage = pageCanvas.toDataURL("image/png");
        const pageImageProps = pdf.getImageProperties(pageImage);
        const pageImageHeight = (pageImageProps.height * pdfWidth) / pageImageProps.width;
        pdf.addImage(pageImage, "PNG", 0, currentY, pdfWidth, pageImageHeight, undefined, "FAST");
        currentY = 0;
      }

      pdf.save("Vipin_Yadav_Resume.pdf");
      setStatus("success");
    } catch (error) {
      console.error("Resume PDF generation failed:", error);
      setStatus("error");
    }
  };

  const buttonText =
    status === "generating"
      ? "Generating PDF..."
      : status === "success"
        ? "Resume Downloaded"
        : status === "error"
          ? "Download Failed"
          : "Download Resume";

  return (
    <div className="resume-page-shell">
      <div className="resume-page-inner">
        <div className="resume-page-actions">
          <button
            type="button"
            onClick={handleDownloadResume}
            disabled={status === "generating"}
            className="resume-download-button"
          >
            <Download size={16} />
            {buttonText}
          </button>
        </div>

        <div className="resume-preview-panel">
          <ResumeDocument />
        </div>
      </div>
    </div>
  );
}
