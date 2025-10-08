import { Link, useLocation } from "react-router-dom";

function PagesDropdown(props) {
  const location = useLocation();
  const dropdown_info = [
    { name: "Course Detail", path: "/course-detail" },
    { name: "Our Features", path: "/features" },
    { name: "Instructors", path: "/instructors" },
    { name: "Testimonials", path: "/testimonials" },
  ];

  return (
    <div className={`dropdown ${props.dropend ? "dropend" : ""}`}>
      <a
        href="#"
        className="dropdown-toggle"
        role="button"
        id="dropdownMenuLink"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{
          textDecoration: "none",
          fontWeight: "bold",
          border: "none",
          color: "inherit",
        }}
      >
        Pages
      </a>
      <div
        className="dropdown-menu page-menu"
        aria-labelledby="dropdownMenuLink"
      >
        {dropdown_info.map((info, key) => (
          <Link
            to={info.path}
            className={`dropdown-item ${
              location.pathname === info.path ? "bg-primary text-light" : ""
            }`}
            key={key}
          >
            {info.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PagesDropdown;
