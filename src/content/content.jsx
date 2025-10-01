import "./content.css";
import Aboutus from "../pages/about/aboutus";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Ourcourses from "../pages/courses/ourcourses";
import Discount from "../components/common/discount";

function Content() {
  return (
    <div>
      <div className="main-content ">
        <div className="text-center content p-5 mb-4 text-light">
          <p className="fw-bold fs-2">Learn From Home</p>
          <h2 className="fw-bold display-1">Education Courses</h2>
        </div>

        <Container className="ps-5 search-section">
          <Row className="p-0 m-0">
            <Col
              xs={3}
              sm={3}
              md={3}
              lg={3}
              xl={3}
              className="p-0 m-0 d-flex justify-content-end  "
            >
              {" "}
              <CourseDropdown className="select  " />
            </Col>
            <Col xs={7} sm={7} md={7} lg={7} xl={7} className="p-0 m-0 ">
              <input
                type="text"
                placeholder=" &nbsp; &nbsp;Keyword"
                className="search-input w-100 h-100 border-1"
              />
            </Col>
            <Col xs={2} sm={2} md={2} lg={2} xl={2} className="p-0 m-0 ">
              <Button variant="danger" className="border-danger h-100  ">
                Search
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <Aboutus />
      <Ourcourses />
      <Discount />

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

      <span className="dropdown-menu course-menu ">
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
