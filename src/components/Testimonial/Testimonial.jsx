import css from "./Testimonial.module.css";
import { Container, Row, Col } from "react-bootstrap";
import TestimonialCarosel from "./TestimonialCarosel";

function Testimonial() {
  return (
    <div className={`${css.container} `}>
      <Container >
        <Row>
          <Col xs={12} sm={12} md={12} lg={5} className="mt-0">
            <h6 className="fs-5">Testimonial</h6>
            <h1 className="display-4 fw-bold">What Say Our Students</h1>
            <p className="m-0 text-secondary fw-normal mb-5 pb-5">
              Dolor est dolores et nonumy sit labore dolores est sed rebum amet,
              justo duo ipsum sanctus dolore magna rebum sit et. Diam lorem ea
              sea at. Nonumy et at at sed justo est nonumy tempor. Vero sea ea
              eirmod, elitr ea amet diam ipsum at amet. Erat sed stet eos ipsum
              diam
            </p>
          </Col>
          <Col xs={12} sm={12} md={12} lg={7} className="px-0 px-lg-3">
            <TestimonialCarosel />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Testimonial;
