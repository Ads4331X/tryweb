import { useEffect, useRef, useState } from "react";
import Coursecards from "./coursecards";
import courseDataWithIds from "./CourseData";

function Slider() {
  let [slide, setslide] = useState(false);
  let ref = useRef(null);
  let intervalID = useRef(null);
  let [index, setindex] = useState(0);

  useEffect(() => {
    let observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !slide) setslide(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [slide]);

  useEffect(() => {
    if (slide) {
        
    }
  });
}
export default Slider;
