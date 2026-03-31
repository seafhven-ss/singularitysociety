"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Pure-CSS scroll-triggered fade-in-up.
 * Content is always visible in SSR / no-JS — animation is progressive enhancement.
 */
export function FadeInUp({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // SSR: visible by default so content renders. JS hydration hides then animates.
  const [ready, setReady] = useState(false); // JS has loaded
  const [visible, setVisible] = useState(false); // element scrolled into view

  useEffect(() => {
    setReady(true);
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Before JS loads: fully visible (SSR fallback). After JS: animate.
  const shouldAnimate = ready && !visible;

  return (
    <div
      ref={ref}
      className={className}
      style={
        shouldAnimate
          ? {
              opacity: 0,
              transform: "translateY(24px)",
              transition: `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s`,
            }
          : {
              opacity: 1,
              transform: "translateY(0)",
              transition: ready
                ? `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s`
                : "none",
            }
      }
    >
      {children}
    </div>
  );
}

export function StaggerContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <FadeInUp className={className} delay={0.08}>
      {children}
    </FadeInUp>
  );
}
