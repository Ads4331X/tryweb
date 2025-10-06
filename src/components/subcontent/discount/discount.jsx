import { Container, Row, Col, Button, Form } from "react-bootstrap";
import css from "./Discount.module.css";

function Discount() {
  return (
    <Container fluid className={css.discount}>
      <Row className="justify-content-center pt-5 pb-5">
        <Col lg={9} className={`py-5 `}>
          <div className="discount-info bg-white p-5 rounded ">
            <h1 className="fw-bold text-center mb-4">
              30% Off For New Students
            </h1>

            <Form>
              <Row className="g-2">
                <Col xs={12} sm={6} lg={6}>
                  <Form.Group controlId="formName">
                    <Form.Control
                      type="text"
                      placeholder="Your Name"
                      className={` ${css.input}`}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} sm={6}>
                  <Form.Group controlId="formEmail">
                    <Form.Control
                      type="email"
                      placeholder="Your Email"
                      className={` ${css.input} `}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} sm={6}>
                  <Form.Group controlId="formCourse">
                    <Form.Select className={` ${css.select}`}>
                      <option className="fw-normal" value="">
                        Select a course
                      </option>
                      <option className="fw-normal" value="course1">
                        Course 1
                      </option>
                      <option className="fw-normal" value="course2">
                        Course 2
                      </option>
                      <option className="fw-normal" value="course3">
                        Course 3
                      </option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col xs={12} sm={6}>
                  <Button
                    variant="primary"
                    type="submit"
                    className={`w-100 fw-bold ${css.btn}`}
                  >
                    Sign Up Now
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Discount;
