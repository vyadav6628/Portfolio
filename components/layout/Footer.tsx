import Link from "next/link";

import { navItems, profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--card)]/80">
      {/* <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-500/10 text-sm font-bold text-cyan-700 dark:text-cyan-200">
              VY
            </span>
          </div>
          <p className="max-w-xs text-sm leading-7 text-[var(--muted)]">
            Full Stack .NET Software Engineer
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--foreground)]">
            Navigation
          </h3>
          <ul className="space-y-2 text-sm text-[var(--muted)]">
            {navItems.filter((item) => item.label !== "Home" && item.label !== "Education").map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="transition hover:text-[var(--foreground)]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--foreground)]">
            Social
          </h3>
          <ul className="space-y-2 text-sm text-[var(--muted)]">
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-[var(--foreground)]">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div> */}
      <div className="border-t border-[var(--border)] px-4 py-5 text-center text-sm text-[var(--muted)] sm:px-6 lg:px-8">
        © 2026 Vipin Yadav. All rights reserved.
      </div>
    </footer>
  );
}
