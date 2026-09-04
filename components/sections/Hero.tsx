"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";
import Link from "next/link";

import { profile } from "@/data/profile";
import { Badge } from "@/components/ui/Badge";

const highlights = [".NET Core", "C#", "Angular", "SQL", "Microservices", "REST APIs"];

const stats = [
  { value: "5.5+", label: "Years Experience" },
  { value: "4+", label: "Major Projects" },
  { value: "Microservices", label: "Architecture" },
  { value: ".NET", label: "Core Expertise" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_28%),radial-gradient(circle_at_right,rgba(168,85,247,0.12),transparent_25%)]" />
      <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-6">● Available for Opportunities</Badge>

            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              Building Reliable Software That Solves Real Problems.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
              {profile.shortBio}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1.5 text-xs font-medium text-cyan-700 dark:text-cyan-100"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 px-5 py-3.5 text-sm font-medium text-white shadow-[0_12px_28px_rgba(59,130,246,0.3)] transition hover:translate-y-[-1px]"
              >
                View My Work
              </Link>
              <a
                href={profile.resumeUrl}
                download={profile.resumeDownloadName}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-3.5 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--card-strong)]"
              >
                Download Resume
              </a>
            </div>

            <div className="mt-6">
              <Link href="#contact" className="inline-flex items-center gap-2 text-sm font-medium text-cyan-700 transition hover:text-cyan-600 dark:text-cyan-300 dark:hover:text-cyan-200">
                Let&apos;s Talk <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute inset-0 -z-10 blur-3xl opacity-70 [background:radial-gradient(circle,rgba(59,130,246,0.18),transparent_60%)]" />
            <div className="relative overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[0_20px_60px_var(--shadow)]">
              <div className="mb-6 flex items-center justify-between border-b border-[var(--border)] pb-4 text-[11px] uppercase tracking-[0.24em] text-[var(--muted)]">
                <span>vipin-yadav.dev</span>
                <span className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  online
                </span>
              </div>

              <div className="rounded-2xl border border-cyan-400/20 bg-[var(--card-strong)] p-4">
                <div className="mb-4 flex items-center gap-2 text-xs text-[var(--muted)]">
                  <Code2 size={14} className="text-cyan-700 dark:text-cyan-300" />
                  Full Stack Engineer
                </div>

                <div className="space-y-3">
                  {[
                    ".NET Core",
                    "Microservices",
                    "REST API",
                    "SQL Optimization",
                  ].map((skill, index) => (
                    <div
                      key={skill}
                      className={`rounded-xl border px-3 py-2 text-sm font-medium ${
                        index % 2 === 0
                          ? "border-cyan-400/20 bg-cyan-500/5 text-cyan-100"
                          : "border-violet-400/20 bg-violet-500/5 text-violet-100"
                      }`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>

                <div className="mt-5 border-t border-[var(--border)] pt-4 text-xs text-[var(--muted)]">
                  Backend → API → Database
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  { label: "status", value: "ready" },
                  { label: "focus", value: "enterprise systems" },
                  { label: "stack", value: ".NET + Angular + SQL" },
                ].map((entry) => (
                  <div key={entry.label} className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--soft)] px-3 py-2 text-xs text-[var(--muted)]">
                    <span>{entry.label}</span>
                    <span className="text-[var(--foreground)]">{entry.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 text-left backdrop-blur-sm"
            >
              <div className="text-3xl font-semibold text-[var(--foreground)]">{stat.value}</div>
              <div className="mt-2 text-sm text-[var(--muted)]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
