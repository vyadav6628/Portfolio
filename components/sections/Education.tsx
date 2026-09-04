import { SectionHeading } from "@/components/ui/SectionHeading";
import { education } from "@/data/profile";

export function Education() {
  return (
    <section id="education" className="w-full px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation"
          description="A strong technical base supporting a career in software engineering, systems design, and product delivery."
        />

        <div className="mt-8 w-full space-y-8">
          {education.map((item) => (
            <div
              key={item.id}
              className="w-full rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-6 md:p-8"
            >
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
                  {item.period}
                </p>
                <h3 className="text-2xl font-semibold text-[var(--foreground)]">{item.degree}</h3>
                <p className="text-base text-[var(--muted)]">{item.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
