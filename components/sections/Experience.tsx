"use client";

import { motion } from "framer-motion";

import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Experience"
        title="My Engineering Journey"
        description="A practical engineering career shaped by enterprise systems, backend architecture, and high-visibility product work."
      />

      <div className="relative mt-12">
        <div className="absolute left-[12px] top-0 h-full w-px bg-gradient-to-b from-cyan-500/80 via-violet-500/60 to-transparent" />

        <div className="space-y-8">
          {experience.map((item, index) => (
            <motion.div
              key={`${item.company}-${item.project}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="relative pl-12"
            >
              <div className="absolute left-0 top-3 flex h-7 w-7 items-center justify-center rounded-full border border-cyan-400/40 bg-[var(--card)] shadow-[0_0_18px_rgba(34,211,238,0.35)]">
                <div className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
              </div>
              <div className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-6">
                <div className={`mb-5 rounded-2xl border border-[var(--border)] bg-gradient-to-r ${item.accent} p-4 relative`}>
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <div className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
                        {item.company}
                      </div>
                      <div className="mt-2 text-2xl font-semibold text-[var(--foreground)]">{item.role}</div>
                    </div>
                    <div className="text-sm text-[var(--muted)]">{item.location}</div>
                  </div>
                  {item.duration && item.duration.includes("Present") ? (
                    <div className="absolute right-3 top-3 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-600">
                      Present
                    </div>
                  ) : null}
                </div>

                <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
                  <div>
                    <div className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
                      Project
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--foreground)]">{item.project}</h3>
                    <div className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                      <div>
                        <span className="text-[var(--muted-strong)]">Team: </span>
                        {item.team}
                      </div>
                      <div>
                        <span className="text-[var(--muted-strong)]">Duration: </span>
                        {item.duration}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
                      Stack
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-[var(--border)] bg-[var(--soft)] px-2.5 py-1 text-xs text-[var(--foreground)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
                    Responsibilities
                  </div>
                  <ul className="grid gap-2 text-sm text-[var(--muted)] sm:grid-cols-2">
                    {item.responsibilities.map((responsibility) => (
                      <li key={responsibility} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
