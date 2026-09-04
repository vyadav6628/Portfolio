"use client";

import { useEffect, useState } from "react";

export function CursorBall() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [target, setTarget] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;

    if (reduceMotion || coarsePointer) {
      setEnabled(false);
      return;
    }

    setEnabled(true);

    const handlePointerMove = (event: PointerEvent) => {
      setTarget({ x: event.clientX, y: event.clientY });
    };

    const animate = () => {
      setPosition((current) => ({
        x: current.x + (target.x - current.x) * 0.12,
        y: current.y + (target.y - current.y) * 0.12,
      }));
      requestAnimationFrame(animate);
    };

    const frame = requestAnimationFrame(animate);
    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [target.x, target.y]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[70] hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-white/10 shadow-[0_0_30px_rgba(59,130,246,0.14)] backdrop-blur-md md:block"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    />
  );
}
