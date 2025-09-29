import { useEffect, useRef, useState } from "react";
import Coursecards from "./coursecards";
import courseDataWithIds from "./CourseData.jsx";
// import { useCardWidth } from "./coursecardwidth";
import { useContainerWidth } from "./coursecardquantity";

function Slider() {
  let [slide, setslide] = useState(false);
  const [containerRef, containerWidth] = useContainerWidth();
  let intervalID = useRef(null);
  const trackRef = useRef(null);
  //   let [index, setindex] = useState(0);
  //   let [cardRef, cardWidth] = useCardWidth();
  useEffect(() => {
    let observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !slide) setslide(true);
      },
      { threshold: 0.5 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [slide]);

  let [scrollindex, setscrollindex] = useState(0);
  let extendedData = [...courseDataWithIds, ...courseDataWithIds.slice(0, 3)];

  const cardsPerView =
    containerWidth >= 1200
      ? 4
      : containerWidth >= 992
      ? 4
      : containerWidth >= 768
      ? 2
      : 1;
  const cardWidth = containerWidth / cardsPerView;

  useEffect(() => {
    if (slide) {
      intervalID.current = setInterval(() => {
        // setindex(
        //   (previousindex) => (previousindex + 1) % courseDataWithIds.length
        // );
        setscrollindex((prev) => prev + 1);
      }, 4000);
      return () => clearInterval(intervalID.current);
    }
  }, [slide]);

  useEffect(() => {
    if (scrollindex === courseDataWithIds.length) {
      setTimeout(() => {
        if (trackRef.current) {
          trackRef.current.style.transition = "none";
        }
        setscrollindex(0);
        setTimeout(() => {
          if (trackRef.current)
            trackRef.current.style.transition = "transform 0.5s ease-in-out";
        }, 50);
      }, 500);
    }
  }, [scrollindex]);

  return (
    <div
      className="d-flex justify-content-start align-items-center overflow-x-auto slide-bar"
      ref={containerRef}
    >
      <div
        className="card-wrapper"
        ref={trackRef}
        style={{
          transform: `translateX(-${scrollindex * cardWidth}px)`,
          transition: "transform 0.5s ease-in-out",
          display: "flex",
        }}
      >
        {extendedData.map((c, i) => {
          return (
            <div
              className="d-flex"
              key={i}
              style={{ flex: `0 0 ${cardWidth}px` }}
            >
              <Coursecards {...c} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
