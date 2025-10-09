import { Row, Col, Container, Button } from "react-bootstrap";

function Searchsection() {
  return (
    <Container className="ps-0 pe-0 pb-5 mb-5 w-75 search-section">
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
            className="search-input w-100 h-100 border-1 border-light"
          />
        </Col>
        <Col xs={2} sm={2} md={2} lg={2} xl={2} className="p-0 m-0 ">
          <Button variant="danger" className="border-danger h-100  ">
            Search
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

function CourseDropdown() {
  let courses = ["Course 1", "Course 2", "Course 3"];
  return (
    <div className="dropdown course-dropdown ">
      <a
        href="#"
        className="dropdown-toggle fw-normal fs-6 "
        role="button"
        data-bs-toggle="dropdown"
        style={{ textDecoration: "none", textAlign: "center", color: "black" }}
      >
        Courses
      </a>

      <div className="dropdown-menu course-menu ">
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

export default Searchsection;
