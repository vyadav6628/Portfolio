"use client";

import { Send } from "lucide-react";
import { useRef, useState } from "react";

import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function Contact() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const isSubmittingRef = useRef(false);
  const isLoading = status === "loading";

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmittingRef.current) {
      return;
    }

    isSubmittingRef.current = true;
    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your message right now.");
      }

      setStatus("success");
      setFeedback(result.message || "Message sent successfully.");
      setForm(initialState);
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Unable to send your message right now.",
      );
    } finally {
      isSubmittingRef.current = false;
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Contact"
        title="Let&apos;s Build Something Useful"
        description="Have an interesting project, engineering opportunity, or technical problem to discuss? Let&apos;s connect."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-5 rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-6">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card-strong)] p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">Email</p>
            <a href={`mailto:${profile.email}`} className="mt-2 block text-base text-[var(--foreground)] hover:text-cyan-700 dark:hover:text-cyan-200">
              {profile.email}
            </a>
          </div>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card-strong)] p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">Phone</p>
            <p className="mt-2 text-base text-[var(--foreground)]">{profile.phone}</p>
          </div>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card-strong)] p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">Location</p>
            <p className="mt-2 text-base text-[var(--foreground)]">Lucknow, Uttar Pradesh, India</p>
          </div>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card-strong)] p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">LinkedIn</p>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="mt-2 block text-base text-[var(--foreground)] hover:text-cyan-700 dark:hover:text-cyan-200">
              www.linkedin.com/in/vipin-yadav
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm text-[var(--foreground)]">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-[var(--border)] bg-[var(--card-strong)] px-3 py-2.5 text-[var(--foreground)] outline-none placeholder:text-[var(--muted)]"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-[var(--foreground)]">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-[var(--border)] bg-[var(--card-strong)] px-3 py-2.5 text-[var(--foreground)] outline-none placeholder:text-[var(--muted)]"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="mb-1 block text-sm text-[var(--foreground)]">Subject</label>
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-[var(--border)] bg-[var(--card-strong)] px-3 py-2.5 text-[var(--foreground)] outline-none placeholder:text-[var(--muted)]"
              placeholder="Project inquiry"
            />
          </div>

          <div className="mt-4">
            <label className="mb-1 block text-sm text-[var(--foreground)]">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full rounded-xl border border-[var(--border)] bg-[var(--card-strong)] px-3 py-2.5 text-[var(--foreground)] outline-none placeholder:text-[var(--muted)]"
              placeholder="Tell me about your idea or opportunity"
            />
          </div>

          {feedback ? (
            <p className={`mt-4 text-sm ${status === "success" ? "text-emerald-300" : "text-rose-300"}`}>
              {feedback}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={isLoading}
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 px-5 py-3 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isLoading ? (
              <>
                <div className="flex items-center justify-center">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                </div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send size={16} />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
