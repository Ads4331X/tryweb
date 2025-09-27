function PagesDropdown(props) {
  let dropdown_info = [
    "Course Detail",
    "Our Features",
    "Instructors",
    "Testimonials",
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
      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        {dropdown_info.map((info, key) => (
          <a className="dropdown-item" href="#" key={key}>
            {info}
          </a>
        ))}
      </div>
    </div>
  );
}

export default PagesDropdown;
