import { useRef, type ReactNode } from "react";

export function Tilt3D({
  children,
  className = "",
  max = 8,
  scale = 1.02,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  scale?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const move = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--ry", `${px * max * 2}deg`);
    el.style.setProperty("--rx", `${-py * max * 2}deg`);
    el.style.setProperty("--tz", `${scale}`);
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--tz", "1");
  };

  return (
    <div
      ref={ref}
      onPointerMove={move}
      onPointerLeave={reset}
      className={`tilt-3d ${className}`}
    >
      {children}
    </div>
  );
}
