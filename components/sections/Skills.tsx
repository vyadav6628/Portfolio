"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillFilters, skills } from "@/data/skills";

type Grouped = { group: string; items: string[] };

export function Skills() {
  const [activeFilter, setActiveFilter] = useState<(typeof skillFilters)[number]>("All");

  const grouped = useMemo(() => {
    const map = new Map<string, Set<string>>();
    skills.forEach((s) => {
      if (!map.has(s.group)) map.set(s.group, new Set());
      map.get(s.group)?.add(s.name);
    });
    const arr: Grouped[] = [];
    map.forEach((set, group) => arr.push({ group, items: Array.from(set) }));
    return arr.sort((a, b) => a.group.localeCompare(b.group));
  }, []);

  const visible = useMemo(() => {
    if (activeFilter === "All") return grouped;
    return grouped.filter((g) => g.group === activeFilter);
  }, [activeFilter, grouped]);

  return (
    <section id="skills" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Technical Skills"
        title="Tools, frameworks, and systems I build with"
        description="A focused stack across backend engineering, frontend delivery, data systems, and operational tooling."
      />

      <div className="mt-6 overflow-x-auto pb-2">
        <div className="flex gap-2 px-1">
          {skillFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm transition ${
                activeFilter === filter
                  ? "border-cyan-400/40 bg-cyan-500/15 text-cyan-700 dark:text-cyan-100"
                  : "border-[var(--border)] bg-[var(--card)] text-[var(--muted)] hover:bg-[var(--card-strong)]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((group) => (
          <motion.div
            key={group.group}
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.24 }}
            className="group rounded-[18px] border border-[var(--border)] bg-[var(--card)] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-[var(--muted)]">{group.group}</div>
                <div className="mt-2 text-2xl font-semibold text-[var(--foreground)]">{group.items.length} technologies</div>
              </div>
              <div className="ml-4 text-[14px] text-[var(--muted)]">⚙️</div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.slice(0, 12).map((tech) => (
                <span key={tech} className="rounded-full border border-[var(--border)] bg-[var(--soft)] px-2.5 py-1 text-xs text-[var(--foreground)]">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-4 text-right">
              <button type="button" className="text-sm font-medium text-cyan-700 hover:underline">
                View Skills →
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
