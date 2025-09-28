import "./content.css";
import Aboutus from "../components/pages/about/aboutus";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Content() {
  return (
    <div>
      <div className="main-content ">
        <div className="text-center content p-5 mb-4 text-light">
          <p className="fw-bold fs-2">Learn From Home</p>
          <h2 className="fw-bold display-1">Education Courses</h2>
        </div>
        <div className="d-flex justify-content-center align-items-center search-section">
          <span className="searchbox mx-auto mb-5">
            <CourseDropdown className="select" />
            <input type="text" placeholder="Keyword" className="search-input" />
            <Button variant="danger" className="border-danger">
              Search
            </Button>

            {/* <button className="btn btn-danger border-danger ">
                    Search
                  </button> */}
          </span>
        </div>
      </div>
      <Aboutus />

      <br />
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

      <span className="dropdown-menu course-menu">
        {courses.map((course, index) => {
          return (
            <a className="dropdown-item" href="#" key={index}>
              {course}
            </a>
          );
        })}
      </span>
    </div>
  );
}

export default Content;
