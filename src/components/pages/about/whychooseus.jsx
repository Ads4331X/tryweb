import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./whychooseus.css";
import { GiGraduateCap } from "react-icons/gi";
import { FaCertificate } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";

function Whychooseus() {
  return (
    <Container>
      <div>
        <Row>
          <Col xs={12} sm={12} md={12} lg={7}>
            <div className="whychooseus-content">
              <h6>Why Choose Us?</h6>

              <h1 className="display-5 fw-bold mb-4  p-0 why-info">
                Why You Should Start Learning with Us?
              </h1>

              <p className="text-secondary  mb-4  fw-normal whypara">
                Aliquyam accusam clita nonumy ipsum sit sea clita ipsum clita,
                ipsum dolores amet voluptua duo dolores et sit ipsum rebum,
                sadipscing et erat eirmod diam kasd labore clita est. Diam
                sanctus gubergren sit rebum clita amet.
              </p>
            </div>

            <Row className="icon-container">
              <Col xs={2} sm={2} md={2} lg={2} >
                <GiGraduateCap className="bg-primary graduate" />
              </Col>
              <Col xs={9} sm={9} md={9} lg={10}>
                <span className="d-flex flex-column justify-content-center">
                  <h4 className="text-dark">Skilled Instructors</h4>
                  <p className="text-secondary fw-normal why-para">
                    Labore rebum duo est Sit dolore eos sit tempor eos stet,
                    vero vero clita magna kasd no nonumy et eos dolor magna
                    ipsum.
                  </p>
                </span>
              </Col>

              <Col xs={2} sm={2} md={2} lg={2}>
                <FaCertificate className="bg-danger graduate" />
              </Col>
              <Col xs={9} sm={9} md={9} lg={10}>
                <span className="d-flex flex-column justify-content-center">
                  <h4 className="text-dark">International Certificate</h4>
                  <p className="text-secondary fw-normal why-para">
                    Labore rebum duo est Sit dolore eos sit tempor eos stet,
                    vero vero clita magna kasd no nonumy et eos dolor magna
                    ipsum.
                  </p>
                </span>
              </Col>

              <Col xs={2} sm={2} md={2} lg={2}>
                <FaBookOpenReader className="bg-warning graduate" />
              </Col>
              <Col xs={9} sm={9} md={9} lg={10}>
                <span className="d-flex flex-column justify-content-center">
                  <h4 className="text-dark">Online Classes</h4>
                  <p className="text-secondary fw-normal why-para">
                    Labore rebum duo est Sit dolore eos sit tempor eos stet,
                    vero vero clita magna kasd no nonumy et eos dolor magna
                    ipsum.
                  </p>
                </span>
              </Col>
            </Row>
          </Col>

          <Col xs={12} sm={12} md={12} lg={5}>
            <div className="whychooseus-image">
              <img
                src="	https://themewagon.github.io/Edukate/img/feature.jpg"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
export default Whychooseus;
