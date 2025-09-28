import { useState, useEffect, useRef } from "react";

function Logic(props) {
  let [hasrun, sethasrun] = useState(false);
  let ref = useRef(null);
  let intervalid = useRef(null);
  let [count, setcount] = useState(props.start);

  useEffect(() => {
    let observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasrun) {
          sethasrun(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasrun]);

  useEffect(() => {
    if (hasrun) {
      let start = Date.now();
      let framerate = 16;
      let end = start + props.duration;

      intervalid.current = setInterval(() => {
        let currentTime = Date.now();
        let elapsedTime = currentTime - start;
        if (currentTime > end) {
          clearInterval(intervalid.current);
          setcount(props.end);
          return;
        }

        let newCount =
          props.start +
          (elapsedTime / props.duration) * (props.end - props.start);

        setcount(Math.round(newCount));
      }, framerate);
      return () => clearInterval(intervalid.current);
    }
  }, [hasrun, props.end, props.start, props.duration]);

  return <div ref={ref}> {count}</div>;
}

export default Logic;
