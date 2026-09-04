"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Projects() {
  const [openProject, setOpenProject] = useState<string>(projects[0].id);

  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work shaped by real business problems"
        description="Enterprise systems, public-sector services, document workflows, and healthcare operations delivered with a product mindset."
      />

      <div className="mt-10 space-y-5">
        {projects.map((project) => {
          const expanded = openProject === project.id;

          return (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden rounded-[30px] border border-[var(--border)] bg-[var(--card)]"
            >
              <div className="grid gap-5 p-5 md:grid-cols-[0.15fr_0.85fr_0.25fr] md:items-center md:p-6">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">
                  Project {project.id}
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-semibold text-[var(--foreground)]">{project.title}</h3>
                    {project.badge ? (
                      <span className="rounded-full border border-violet-400/30 bg-violet-500/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-violet-700 dark:text-violet-200">
                        {project.badge}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-2 text-sm text-cyan-700 dark:text-cyan-200">{project.subtitle}</p>
                </div>

                <button
                  type="button"
                  onClick={() => setOpenProject(expanded ? "" : project.id)}
                  className="ml-auto flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--soft)] px-4 py-2 text-sm text-[var(--foreground)] transition hover:bg-[var(--card-strong)]"
                >
                  {expanded ? "Hide details" : "View details"}
                  {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
              </div>

              <AnimatePresence initial={false}>
                {expanded ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden border-t border-[var(--border)]"
                  >
                    <div className="grid gap-6 p-5 md:grid-cols-[1.2fr_0.8fr] md:p-6">
                      <div>
                        <div className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
                          Domain
                        </div>
                        <p className="text-lg font-medium text-[var(--foreground)]">{project.domain}</p>

                        <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">
                          {project.description}
                        </p>

                        <div className="mt-6">
                          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
                            Responsibilities
                          </div>
                          <ul className="grid gap-2 text-sm text-[var(--muted)] sm:grid-cols-2">
                            {project.responsibilities.map((item) => (
                              <li key={item} className="flex gap-2">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="rounded-[24px] border border-[var(--border)] bg-[var(--card-strong)] p-5">
                        <div className="flex items-center justify-between gap-3">
                          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
                            Stack
                          </div>
                          <ArrowUpRight size={16} className="text-[var(--muted)]" />
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-[var(--border)] bg-[var(--soft)] px-2.5 py-1.5 text-xs text-[var(--foreground)]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="mt-6 space-y-3 border-t border-[var(--border)] pt-4 text-sm text-[var(--muted)]">
                          <div className="flex justify-between gap-3">
                            <span>Team size</span>
                            <strong className="text-[var(--foreground)]">{project.team}</strong>
                          </div>
                          <div className="flex justify-between gap-3">
                            <span>Duration</span>
                            <strong className="text-[var(--foreground)]">{project.duration}</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
