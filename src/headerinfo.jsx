import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Pages from "./pages";
import { IoIosHome } from "react-icons/io";

function Headerinfo(props) {
  let [hovered, setHovered] = useState(null);
  let items = [];
  if (props.dropend) {
    items = ["Home", "Courses", "About", <Pages dropend={true} />, "Contact"];
  } else {
    items = ["Home", "Courses", "About", <Pages />, "Contact"];
  }

  return (
    <div className="line d-flex gap-4 m-4 align-items-center">
      {items.map((item, index) => (
        <div
          className="items"
          key={item}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
        >
          <Link
            to={`/${item}`}
            className="link-text"
            style={{
              color: hovered === index ? "#1bceffff" : "black",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "color 0.3s ease",
            }}
          >
            {" "}
            {props.currentPage === item ? (
              <div className="currentPage text-primary"> {item}</div>
            ) : (
              item
            )}
          </Link>
        </div>
      ))}
    </div>
  );
}
export default Headerinfo;
