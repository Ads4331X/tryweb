import { useState, useRef, useEffect } from "react";

export function useCardWidth() {
  const cardRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  const updatewidth = () => {
    window.addEventListener("resize", () => {
      if (cardRef.current) {
        setCardWidth(cardRef.current.offsetWidth);
      }
    });
  };
  useEffect(() => {
    updatewidth();
    setCardWidth(cardRef.current.offsetWidth);
    return () => window.removeEventListener("resize", updatewidth);
  }, []);



  return [cardRef, cardWidth];
}
