import "./autocounter.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logic from "./counterlogic";

function AutoCounter() {
  return (
    <Container className="d-flex justify-content-center">
      <Row className="d-flex justify-content-center counter-container">
        <div className="row d-flex ">
          <Col xs={3} sm={3} md={3} lg={3} className="p-0">
            <div className="bg-success counter-box p-3 ">
              <span className="counter text-light">
                <h5 className="count">
                  <Logic start={0} end={123} duration={2000} />
                </h5>
                <h5>Available Subjects</h5>
              </span>
            </div>
          </Col>
          <Col xs={3} sm={3} md={3} lg={3} className="p-0">
            <div className="bg-primary counter-box p-3 ">
              <span className="counter text-light  ">
                <h5 className="count">
                  <Logic start={0} end={1234} duration={2000} />
                </h5>
                <h5>Online Courses</h5>
              </span>
            </div>
          </Col>
          <Col xs={3} sm={3} md={3} lg={3} className="p-0">
            <div className="bg-danger counter-box p-3 ">
              <span className="counter text-light ">
                <h5 className="count">
                  <Logic start={0} end={123} duration={2000} />
                </h5>
                <h5>Skilled Instructors</h5>
              </span>
            </div>
          </Col>
          <Col xs={3} sm={3} md={3} lg={3} className="p-0">
            <div className="bg-warning counter-box p-3 ">
              <span className="counter text-light ">
                <h5 className="count">
                  <Logic start={0} end={1234} duration={2000} />
                </h5>
                <h5>Happy Students</h5>
              </span>
            </div>
          </Col>
        </div>
      </Row>

      
    </Container>
  );
}

export default AutoCounter;
