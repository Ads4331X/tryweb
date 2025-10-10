import { Container, Row, Col } from "react-bootstrap";
import courseDataWithIds from "../CourseData";
import css from "./CourseDetails.module.css";
import { useNavigate } from "react-router-dom";
import { FaStar, FaUser } from "react-icons/fa";

function RecentCourses() {
  let navigate = useNavigate();
  const goto = (index) => {
    navigate(`/courses/course-${index + 1}`);
  };

  return (
    <div>
      <h2 className="fw-bold mb-4">Recent Courses</h2>
      <Container>
        {courseDataWithIds.map((course, index) => (
          <Row key={index} className={`mb-3 ${css.courseRow}`}>
            <Col xs="auto" className={css.imgCol} onClick={() => goto(index)}>
              <img
                src={course.bgImg}
                alt={course.coursename}
                className={css.fixedImg}
              />
            </Col>
            <Col className={css.padding} onClick={() => goto(index)}>
              <h5
                className={`fw-semibold text-dark mb-2 fs-6 ${css.courseTitle}`}
              >
                {course.coursename}
              </h5>
              <div className="d-flex justify-content-start gap-2 align-items-center flex-wrap">
                <p
                  className={`text-secondary mb-0 fw-normal d-flex align-items-center ${css.courseMeta}`}
                >
                  <FaUser className="text-primary" /> &nbsp;{course.Instructor}
                </p>
                <p
                  className={`text-secondary mb-0 fw-normal d-flex align-items-center ${css.courseMeta}`}
                >
                  <FaStar className="text-primary" /> &nbsp; {course.rating}
                  <small className="fw-normal mt-1">
                    ({course.ratednumber})
                  </small>
                </p>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
}

export default RecentCourses;
