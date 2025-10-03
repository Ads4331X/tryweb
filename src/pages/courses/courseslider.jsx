import { useEffect, useRef, useState } from "react";
import Coursecards from "./coursecards";
import courseDataWithIds from "./CourseData.jsx";
import { useContainerWidth } from "./useContainerWidth.jsx";
import { Button } from "react-bootstrap";
import { useVisibilityObserber } from "./useVisibilityObserver.jsx";

function Slider() {
  const [containerRef, containerWidth] = useContainerWidth();
  const slide = useVisibilityObserber(containerRef);
  let intervalID = useRef(null);
  const trackRef = useRef(null);

  let [scrollindex, setscrollindex] = useState(3);
  let extendedData = [
    ...courseDataWithIds.slice(-3),
    ...courseDataWithIds,
    ...courseDataWithIds.slice(0, 3),
  ];

  const cardsPerView =
    containerWidth >= 1200 || containerWidth >= 992
      ? 4
      : containerWidth >= 768
      ? 2
      : 1;
  const cardWidth = containerWidth / cardsPerView;

  useEffect(() => {
    if (slide) {
      intervalID.current = setInterval(() => {
        setscrollindex((prev) => prev + 1);
      }, 4000);
      return () => clearInterval(intervalID.current);
    }
  }, [slide]);

  useEffect(() => {
    if (scrollindex >= courseDataWithIds.length + 3) {
      setTimeout(() => {
        if (trackRef.current) {
          trackRef.current.style.transition = "none";
        }
        setscrollindex(3);
        setTimeout(() => {
          if (trackRef.current) {
            trackRef.current.style.transition = "transform 0.5s ease-in-out";
          }
        }, 50);
      }, 500);
    }
    if (scrollindex < 3) {
      setTimeout(() => {
        if (trackRef.current) {
          trackRef.current.style.transition = "none";
        }
        setscrollindex(courseDataWithIds.length + 2);
        setTimeout(() => {
          if (trackRef.current) {
            trackRef.current.style.transition = "transform 0.5s ease-in-out";
          }
        }, 50);
      }, 500);
    }
  }, [scrollindex]);

  return (
    <div
      className="d-flex justify-content-start align-items-center slide-bar"
      ref={containerRef}
    >
      <div
        className="card-wrapper"
        ref={trackRef}
        style={{
          transform: `translateX(-${scrollindex * cardWidth}px)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {extendedData.map((c, i) => {
          return (
            <div
              className={`d-flex text-center justify-content-center align-items-center flex-column card-container  `}
              key={i}
              style={{
                flex: `0 0 ${cardWidth}px`,
              }}
            >
              <div className={` text-center w-100 `}>
                <Coursecards {...c} />
              </div>
              <div className=" d-flex justify-content-center align-items-center w-50 m-3">
                {" "}
                <Button variant="primary" className="course-button">
                  Course Details
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
