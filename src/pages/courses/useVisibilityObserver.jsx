import { useState, useEffect } from "react";

export function useVisibilityObserber(containerRef) {
  const [slide, setslide] = useState(false);
  useEffect(() => {
    let observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !slide) setslide(true);
      },
      { threshold: 0.5 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [containerRef, slide]);

  return slide;
}
