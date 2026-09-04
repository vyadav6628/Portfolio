"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/ui/SectionHeading";

const principles = [
  {
    title: "Build For Scale",
    description: "Design systems that remain maintainable as requirements and users grow.",
  },
  {
    title: "Solve The Root Problem",
    description: "Focus on understanding the business and technical problem before implementing the solution.",
  },
  {
    title: "Performance Matters",
    description: "Optimize APIs, database queries, and application workflows.",
  },
  {
    title: "Keep Learning",
    description: "Continuously improve architecture, tools, and engineering practices.",
  },
];

const qualities = [
  "Complex problem solving",
  "Performance optimization",
  "Scalable architecture",
  "API development",
  "Database design",
  "Enterprise application development",
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="About"
        title="Engineering With a Problem-Solving Mindset"
        description="Vipin Yadav is a software engineer with over 5.5+ years of experience in .NET Core, C#, SQL, Angular, and Microservices."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8"
        >
          <p className="text-base leading-8 text-[var(--muted)]">
            His specialization includes backend development, API design, and database optimization.
            Experience includes college management systems, hospital management systems, document
            management systems, citizen-centric platforms, and result processing systems.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {qualities.map((item) => (
              <span
                key={item}
                className="rounded-full border border-cyan-400/25 bg-cyan-500/10 px-3 py-2 text-sm text-cyan-700 dark:text-cyan-100"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-[28px] border border-[var(--border)] bg-gradient-to-br from-cyan-500/10 via-[var(--card)] to-violet-500/10 p-6"
        >
          <div className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
            Engineering Principles
          </div>
          <div className="space-y-4">
            {principles.map((principle) => (
              <div key={principle.title} className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4">
                <h3 className="text-lg font-semibold text-[var(--foreground)]">{principle.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{principle.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
