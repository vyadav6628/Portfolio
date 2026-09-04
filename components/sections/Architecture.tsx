"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/ui/SectionHeading";

const stages = [
  { title: "Frontend", description: "Angular-based enterprise interfaces" },
  { title: "API Layer", description: ".NET Core REST APIs" },
  { title: "Application Layer", description: "Business rules and service logic" },
  { title: "Data Layer", description: "EF Core / Dapper / SQL" },
  { title: "Infrastructure", description: "IIS / CI-CD / Azure" },
];

export function Architecture() {
  return (
    <section id="architecture" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Architecture"
        title="How I Build Software"
        description="Focused on maintainable systems, reliable APIs, and practical delivery across the full application lifecycle."
      />

      <div className="mt-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="relative flex-1 rounded-[22px] border border-[var(--border)] bg-[var(--card)] p-4 text-center"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
                {stage.title}
              </div>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{stage.description}</p>
              {index < stages.length - 1 ? (
                <div className="mt-5 hidden text-cyan-700 dark:text-cyan-300 md:block">↓</div>
              ) : null}
            </motion.div>
          ))}
        </div>

        <div className="mt-10 rounded-[32px] border border-[var(--border)] bg-gradient-to-r from-cyan-500/8 via-[var(--card)] to-violet-500/10 p-6">
          <div className="grid gap-3 text-sm md:grid-cols-7">
            {[
              "Frontend",
              "REST APIs",
              "Business Logic",
              "Microservices",
              "Database",
              "Monitoring / Deployment",
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card-strong)] px-4 py-3 text-center text-[var(--foreground)]"
              >
                <div className="font-medium text-[var(--foreground)]">{step}</div>
                {index < 5 ? <div className="mt-3 text-cyan-700 dark:text-cyan-300">↓</div> : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
