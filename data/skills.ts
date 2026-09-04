import type { Skill } from "@/types";

export const skills: Skill[] = [
  // Frontend
  { name: "Angular", group: "Frontend" },
  { name: "React.js", group: "Frontend" },
  { name: "RxJS", group: "Frontend" },
  { name: "JavaScript", group: "Frontend" },
  { name: "jQuery", group: "Frontend" },
  { name: "AJAX", group: "Frontend" },
  { name: "Razor Pages", group: "Frontend" },

  // Backend
  { name: ".NET Core", group: "Backend" },
  { name: "ASP.NET MVC", group: "Backend" },
  { name: "C#", group: "Backend" },
  { name: "Entity Framework Core", group: "Backend" },
  { name: "Dapper", group: "Backend" },
  { name: "LINQ", group: "Backend" },
  { name: "ADO.NET", group: "Backend" },
  { name: "Windows Services", group: "Backend" },
  { name: "JWT", group: "Backend" },
  { name: "Auth0", group: "Backend" },

  // Database
  { name: "MS SQL", group: "Database" },
  { name: "MySQL", group: "Database" },

  // Architecture
  { name: "Microservices", group: "Architecture" },
  { name: "N-Tier Architecture", group: "Architecture" },

  // Cloud & DevOps
  { name: "AWS", group: "Cloud & DevOps" },
  { name: "EC2", group: "Cloud & DevOps" },
  { name: "S3", group: "Cloud & DevOps" },
  { name: "SES", group: "Cloud & DevOps" },
  { name: "Azure DevOps", group: "Cloud & DevOps" },
  { name: "Azure Blob", group: "Cloud & DevOps" },
  { name: "CI/CD", group: "Cloud & DevOps" },
  { name: "IIS", group: "Cloud & DevOps" },
  { name: "Docker", group: "Cloud & DevOps" },
  { name: "Kubernetes", group: "Cloud & DevOps" },

  // Tools & Observability
  { name: "AutoMapper", group: "Tools" },
  { name: "Quartz", group: "Tools" },
  { name: "Serilog", group: "Tools" },
  { name: "SonarQube", group: "Tools" },
  { name: "Sentry", group: "Tools" },
  { name: "GitHub CodeQL", group: "Tools" },
  { name: "Power BI", group: "Tools" },
  { name: "Postman", group: "Tools" },
  { name: "Git", group: "Tools" },
  { name: "Azure Boards", group: "Tools" },
  { name: "JIRA", group: "Tools" },

  // AI Productivity
  { name: "GitHub Copilot", group: "AI" },
  { name: "Cursor", group: "AI" },
  { name: "Claude AI", group: "AI" },
  { name: "ChatGPT", group: "AI" },
  { name: "OpenAI API", group: "AI" },

  // Professional
  { name: "Effective Communication", group: "Professional" },
  { name: "Team Collaboration", group: "Professional" },
  { name: "Analytical Thinking", group: "Professional" },
  { name: "Problem Solving", group: "Professional" },
];

export const skillFilters = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Architecture",
  "Cloud & DevOps",
  "Tools",
  "AI",
] as const;
