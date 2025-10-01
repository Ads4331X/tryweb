import { Col, Row, Button } from "react-bootstrap";

function Discount() {
  return (
    <Row>
      <div className="d-flex justify-content-center align-items-center whychooseus-container discounthome mb-5 p-5">
        <div className="bg-white p-4 w-50">
          <h1 className="text-center">30% Off For New Students</h1>
          <Row className="g-2">
            <Col xs={12} sm={6}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-100 p-3 border-1 fw-normal"
              />
            </Col>
            <Col xs={12} sm={6}>
              <input
                type="text"
                placeholder="Your Email"
                className="w-100 p-3 border-1 fw-normal"
              />
            </Col>
          </Row>
          <Row className="g-2 mt-2">
            <Col xs={12} sm={6}>
              <select name="courses" className="w-100 p-3 border-1 fw-normal">
                <option value="course1">Course 1</option>
                <option value="course2">Course 2</option>
                <option value="course3">Course 3</option>
              </select>
            </Col>
            <Col xs={12} sm={6}>
              <Button variant="primary" className="w-100 p-3">
                Sign Up Now
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </Row>
  );
}
export default Discount;
