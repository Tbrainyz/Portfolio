import { useEffect, useState } from "react";

/**
 * Animates a number up to `target` over `duration` ms, starting only once
 * `trigger` becomes true. Used to count stats up when they scroll into view.
 */
export function useCountUp(target: number, trigger: boolean, duration = 1200): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let frame: number;
    let start: number | undefined;

    const step = (timestamp: number) => {
      if (start === undefined) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [trigger, target, duration]);

  return value;
}
