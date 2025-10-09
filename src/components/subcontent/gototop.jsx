import { FaAngleDoubleUp } from "react-icons/fa";
import "./GotoTop.css";
import { useEffect, useState } from "react";

function GotoTop() {
  let [Isvisible, setIsvisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsvisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`text-light  GotoTop ${Isvisible ? "show" : "hide"}`}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <a>
        <FaAngleDoubleUp />
      </a>
    </div>
  );
}

export default GotoTop;
