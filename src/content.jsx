import "./content.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Content() {
  return (
    <div>
      <div className="main-content   ">
        <div className="text-center content p-5 mb-4 text-light">
          <p className="fw-bold fs-2">Learn From Home</p>
          <h2 className="fw-bold display-1">Education Courses</h2>
        </div>
        <div className="d-flex justify-content-center align-items-center search-section">
          <span className="searchbox mx-auto mb-5">
            <CourseDropdown className="select" />
            <input type="text" placeholder="Keyword" className="search-input" />
            <button className="btn btn-danger ">Search</button>
          </span>
        </div>
      </div>

      <br />

      <div className="sub-content container-fluid about-us p-3 d-flex align-items-center flex-column flex-md-row">
        <div>
          <img
            src="https://themewagon.github.io/Edukate/img/about.jpg"
            className="w-100 h-100"
          />
        </div>
        <div className="about-text">
          <span>ABOUT US</span>
        </div>
      </div>
    </div>
  );
}

function CourseDropdown() {
  let courses = ["Course 1", "Course 2", "Course 3"];
  return (
    <div className="dropdown course-dropdown ">
      <a
        href="#"
        className="dropdown-toggle"
        role="button"
        data-bs-toggle="dropdown"
        style={{ textDecoration: "none", textAlign: "center", color: "black" }}
      >
        Courses
      </a>

      <div className="dropdown-menu">
        {courses.map((course, index) => {
          return (
            <a className="dropdown-item" href="#" key={index}>
              {course}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Content;
