import { useState } from "react";
import { Link } from "react-router-dom";
import PagesDropdown from "../../common/PagesDropdown";

function Headerinfo(props) {
  const [hovered, setHovered] = useState(null);
  let items;

  const home = { name: "Home", path: "/" };
  const about = { name: "About", path: "/about" };
  const courses = { name: "Courses", path: "/courses" };
  const pages = {
    name: "Pages",
    component: <PagesDropdown dropend={props.dropend} />,
  };
  const contact = { name: "Contact", path: "/contact" };

  if (props.dropend) {
    items = [home, about, courses, pages, contact];
  } else {
    items = [home, about, courses, pages, contact];
  }

  return (
    <div className="line d-flex gap-4 align-items-center">
      {items.map((item, index) => (
        <div
          className="items"
          key={item.name}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
        >
          {item.component ? (
            item.component
          ) : (
            <Link
              to={item.path}
              className="link-text"
              style={{
                color: hovered === index ? "#1bceffff" : "black",
                cursor: "pointer",
                fontWeight: "bold",
                transition: "color 0.3s ease",
              }}
            >
              {props.currentPage === item.name ? (
                <div className="currentPage text-primary"> {item.name}</div>
              ) : (
                item.name
              )}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}
export default Headerinfo;
