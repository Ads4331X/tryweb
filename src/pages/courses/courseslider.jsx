import { useEffect, useRef, useState } from "react";
import Coursecards from "./coursecards";
import courseDataWithIds from "./CourseData.jsx";
import { useContainerWidth } from "./coursecardquantity";
import { Button } from "react-bootstrap";
import { useVisibilityObserber } from "./useVisibilityObserver.jsx";

function Slider() {
  const [containerRef, containerWidth] = useContainerWidth();
  const slide = useVisibilityObserber(containerRef);
  let intervalID = useRef(null);
  const trackRef = useRef(null);

  let [scrollindex, setscrollindex] = useState(courseDataWithIds.length);
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
      }, 40000);
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

  let [cardindex, setcardindex] = useState(null);
  const resetTimeout = useRef(null);

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
              className={`d-flex text-center justify-content-center align-items-center flex-column card-${i} ${
                cardindex === i ? "hovered-card" : ""
              }`}
              key={i}
              style={{
                flex: `0 0 ${cardWidth}px`,
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={() => {
                clearTimeout(resetTimeout.current);
                setcardindex(i);
              }}
              onTouchStart={() => {
                clearTimeout(resetTimeout.current);
                setcardindex(i);
              }}
              onMouseLeave={() => {
                resetTimeout.current = setTimeout(() => {
                  setcardindex(null);
                }, 300);
              }}
            >
              <div className={`card-container text-center w-100`}>
                <Coursecards {...c} />
                {cardindex === i && (
                  <div className="d-flex justify-content-center align-items-center flex-column ">
                    <Button
                      variant="primary"
                      className="w-50 course-button m-4 "
                    >
                      Course Details
                    </Button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
