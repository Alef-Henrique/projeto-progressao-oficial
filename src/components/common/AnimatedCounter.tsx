import React, { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target,
  prefix = '',
  suffix = '',
  duration = 2000,
  className = '',
}) => {
  const [count, setCount] = useState<number>(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimatedRef = useRef<boolean>(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(target);
      return;
    }

    const currentElem = elementRef.current;
    if (!currentElem) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;

          const startTimestamp = performance.now();

          const step = (currentTime: number) => {
            const elapsed = currentTime - startTimestamp;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function (easeOutExpo): starts briskly, decelerates smoothly
            const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const currentVal = Math.floor(easedProgress * target);

            setCount(currentVal);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(currentElem);

    return () => {
      observer.disconnect();
    };
  }, [target, duration]);

  return (
    <span ref={elementRef} className={className}>
      {prefix}
      {count.toLocaleString('pt-BR')}
      {suffix}
    </span>
  );
};
