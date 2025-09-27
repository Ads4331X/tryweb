import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./aboutus.css";
function AboutUs() {
  return (
    <Container>
      <Row>
        <Col sm={12} md={12} lg={5}>
          <div className="about-image">
            <img
              src="https://themewagon.github.io/Edukate/img/about.jpg"
              className="img-fluid"
            />
          </div>
        </Col>
        <Col sm={12} md={12} lg={7} className="about-text">
          <h6 className=" fs-5 about-text">About Us</h6>
          <div className=" info ">
            <h1 className="text-dark display-4 fw-bold mb-4 ">
              First Choice For Online Education Anywhere
            </h1>
            <p className="text-secondary mb-4 about-para">
              Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam
              dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam
              diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem
              et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
              tempor consetetur takimata eirmod, dolores takimata consetetur
              invidunt magna dolores aliquyam dolores dolore. Amet erat amet et
              magna
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default AboutUs;
