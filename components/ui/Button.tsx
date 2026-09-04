import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 text-white shadow-[0_10px_30px_rgba(59,130,246,0.35)] hover:shadow-[0_16px_40px_rgba(59,130,246,0.45)]",
    secondary:
      "border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] hover:bg-[var(--card-strong)]",
    ghost: "text-cyan-700 hover:bg-cyan-500/10 dark:text-cyan-300",
  };

  return (
    <button
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition duration-200 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
