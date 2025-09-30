import { useState, useRef, useEffect } from "react";

export function useContainerWidth() {
  let [containerwidth, setcontainerwidth] = useState(0);
  let containerRef = useRef(null);

  useEffect(() => {
    const update = () => {
      window.addEventListener("resize", () => {
        if (containerRef.current)
          setcontainerwidth(containerRef.current.offsetWidth);
      });
    };
    update();
    setcontainerwidth(containerRef.current.offsetWidth);
    return () => window.removeEventListener("resize", update);
  }, []);

  return [containerRef, containerwidth];
}
