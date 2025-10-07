import { Container, Row, Col } from "react-bootstrap";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import css from "./help.module.css";
import HelpForm from "./HelpForm";

function Help() {
  return (
    <Container className={` ${css.container}`}>
      <Row>
        <Col xs={12} sm={12} md={12} lg={5}>
          <Row className={`d-flex flex-column gap-4  ${css.icons}`}>
            <Col xs={12} sm={12} md={12} lg={12}>
              {" "}
              <div className="d-flex gap-4">
                <div
                  className={`bg-primary text-light d-flex justify-content-center align-items-center p-4 fs-3 ${css.location}`}
                >
                  <FaLocationDot />{" "}
                </div>
                <div>
                  <h4 className="fw-bold">Our Location</h4>
                  <p className="fw-normal text-secondary">
                    123 Street, New York, USA
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12}>
              <div className="d-flex gap-4">
                <div
                  className={`bg-danger text-light d-flex justify-content-center align-items-center p-4 fs-3 ${css.call}`}
                >
                  <IoCall />{" "}
                </div>
                <div>
                  <h4 className="fw-bold">Call Us</h4>
                  <p className="fw-normal text-secondary">+012 345 6789</p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12}>
              <div className="d-flex gap-4">
                <div
                  className={`bg-warning text-light d-flex justify-content-center align-items-center p-4 fs-3 ${css.email}`}
                >
                  <IoMdMail />{" "}
                </div>
                <div>
                  <h4 className="fw-bold">Email Us</h4>
                  <p className="fw-normal text-secondary">info@example.com</p>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={12} sm={12} md={12} lg={7}>
          <HelpForm />
        </Col>
      </Row>
    </Container>
  );
}
export default Help;
