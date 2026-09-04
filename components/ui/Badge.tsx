type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-[11px] font-medium tracking-[0.24em] text-cyan-700 uppercase dark:text-cyan-200 ${className}`}
    >
      {children}
    </span>
  );
}
