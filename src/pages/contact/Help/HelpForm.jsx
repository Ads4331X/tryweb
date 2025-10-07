import { Container, Row, Col, Form, Button } from "react-bootstrap";
import css from "./help.module.css";

function HelpForm() {
  return (
    <Container className="mt-4">
      <div>
        <h6 className="fs-5 p-0 mb-3">Need Help?</h6>
        <h1 className="display-4 fw-bold">Send Us A Message</h1>
      </div>
      <Form>
        <Row>
          <Col xs={6} sm={6} md={6} lg={6}>
            <Form.Control
              type="text"
              placeholder="Your Name"
              className={` ${css.input}`}
              required
            ></Form.Control>
          </Col>
          <Col xs={6} sm={6} md={6} lg={6}>
            <Form.Control
              type="Email"
              placeholder="Your Email"
              className={` ${css.input}`}
              required
            ></Form.Control>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Control
              type="text"
              placeholder="Subject"
              className={` ${css.input}`}
              required
            ></Form.Control>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Control
              as="textarea"
              placeholder="Message"
              className={`${css.input}`}
              required
            ></Form.Control>{" "}
          </Col>
        </Row>
        <Row>
          <Col>
            <Button varient="primary" type="submit" className={`${css.btn}`}>
              {" "}
              Send Message
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default HelpForm;
