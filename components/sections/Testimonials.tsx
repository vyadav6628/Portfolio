"use client";

import { motion } from "framer-motion";
import { MessageSquareQuote, UserPlus } from "lucide-react";
import { useMemo, useState } from "react";

import { Modal } from "@/components/ui/Modal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials as testimonialData } from "@/data/testimonials";

export function Testimonials() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    role: "",
    company: "",
    email: "",
    testimonial: "",
    linkedin: "",
    avatar: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const items = useMemo(() => testimonialData, []);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};

    if (!form.name.trim()) nextErrors.name = "Name is required";
    if (!form.role.trim()) nextErrors.role = "Role is required";
    if (!form.company.trim()) nextErrors.company = "Company is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email";
    }
    if (!form.testimonial.trim() || form.testimonial.trim().length < 20) {
      nextErrors.testimonial = "Please share a meaningful testimonial";
    }
    if (!form.linkedin.trim()) nextErrors.linkedin = "LinkedIn profile is required";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsOpen(false);
      setForm({
        name: "",
        role: "",
        company: "",
        email: "",
        testimonial: "",
        linkedin: "",
        avatar: "",
      });
    }, 1300);
  };

  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Testimonials"
        title="Trusted By The People I’ve Worked With"
        description="The portfolio is structured for future recommendations. Until then, the section is intentionally placeholder-ready and client-safe."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {items.length > 0 ? (
          items.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ y: -4 }}
              className="rounded-[26px] border border-[var(--border)] bg-[var(--card)] p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/30 to-violet-500/30 text-sm font-semibold text-white">
                  {item.name.slice(0, 1)}
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--foreground)]">{item.name}</h3>
                  <p className="text-sm text-[var(--muted)]">{item.role}</p>
                </div>
              </div>
              <p className="text-base leading-7 text-[var(--muted)]">“{item.message}”</p>
            </motion.div>
          ))
        ) : (
          <>
            <div className="rounded-[26px] border border-dashed border-[var(--border)] bg-[var(--card)] p-8 text-center text-[var(--muted)] lg:col-span-3">
              <MessageSquareQuote className="mx-auto mb-4 text-cyan-700 dark:text-cyan-300" size={28} />
              <p className="text-xl font-medium text-[var(--foreground)]">Your feedback could appear here</p>
              <p className="mt-2 text-sm text-[var(--muted)]">Request a testimonial and it will be reviewed before publication.</p>
            </div>
          </>
        )}
      </div>

      <div className="mt-8 flex justify-center">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-400/35 bg-cyan-500/10 px-5 py-3 text-sm font-medium text-cyan-700 transition hover:bg-cyan-500/15 dark:text-cyan-100"
        >
          <UserPlus size={16} />
          Recommend Vipin
        </button>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Recommend Vipin">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm text-[var(--foreground)]">Name</label>
              <input name="name" value={form.name} onChange={handleChange} className="w-full rounded-xl border border-[var(--border)] bg-[var(--card)] px-3 py-2.5 text-[var(--foreground)] outline-none ring-0 placeholder:text-[var(--muted)]" placeholder="Your name" />
              {errors.name ? <p className="mt-1 text-xs text-rose-300">{errors.name}</p> : null}
            </div>
            <div>
              <label className="mb-1 block text-sm text-[var(--foreground)]">Role</label>
              <input name="role" value={form.role} onChange={handleChange} className="w-full rounded-xl border border-[var(--border)] bg-[var(--card)] px-3 py-2.5 text-[var(--foreground)] outline-none placeholder:text-[var(--muted)]" placeholder="Software Lead" />
              {errors.role ? <p className="mt-1 text-xs text-rose-300">{errors.role}</p> : null}
            </div>
            <div>
              <label className="mb-1 block text-sm text-[var(--foreground)]">Company</label>
              <input name="company" value={form.company} onChange={handleChange} className="w-full rounded-xl border border-[var(--border)] bg-[var(--card)] px-3 py-2.5 text-[var(--foreground)] outline-none placeholder:text-[var(--muted)]" placeholder="Your company" />
              {errors.company ? <p className="mt-1 text-xs text-rose-300">{errors.company}</p> : null}
            </div>
            <div>
              <label className="mb-1 block text-sm text-[var(--foreground)]">Email</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} className="w-full rounded-xl border border-[var(--border)] bg-[var(--card)] px-3 py-2.5 text-[var(--foreground)] outline-none placeholder:text-[var(--muted)]" placeholder="name@email.com" />
              {errors.email ? <p className="mt-1 text-xs text-rose-300">{errors.email}</p> : null}
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm text-[var(--foreground)]">Testimonial</label>
            <textarea name="testimonial" value={form.testimonial} onChange={handleChange} rows={5} className="w-full rounded-xl border border-[var(--border)] bg-[var(--card)] px-3 py-2.5 text-[var(--foreground)] outline-none placeholder:text-[var(--muted)]" placeholder="Write your recommendation" />
            {errors.testimonial ? <p className="mt-1 text-xs text-rose-300">{errors.testimonial}</p> : null}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm text-[var(--foreground)]">LinkedIn profile</label>
              <input name="linkedin" value={form.linkedin} onChange={handleChange} className="w-full rounded-xl border border-[var(--border)] bg-[var(--card)] px-3 py-2.5 text-[var(--foreground)] outline-none placeholder:text-[var(--muted)]" placeholder="https://linkedin.com/in/..." />
              {errors.linkedin ? <p className="mt-1 text-xs text-rose-300">{errors.linkedin}</p> : null}
            </div>
            <div>
              <label className="mb-1 block text-sm text-[var(--foreground)]">Optional avatar</label>
              <input name="avatar" value={form.avatar} onChange={handleChange} className="w-full rounded-xl border border-[var(--border)] bg-[var(--card)] px-3 py-2.5 text-[var(--foreground)] outline-none placeholder:text-[var(--muted)]" placeholder="Image URL" />
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button type="button" onClick={() => setIsOpen(false)} className="rounded-full border border-[var(--border)] px-4 py-2 text-sm text-[var(--foreground)]">Cancel</button>
            <button type="submit" className="rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 px-5 py-2.5 text-sm font-medium text-white">
              {submitted ? "Sending..." : "Submit recommendation"}
            </button>
          </div>
        </form>
      </Modal>
    </section>
  );
}
