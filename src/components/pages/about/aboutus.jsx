import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./aboutus.css";
import AutoCounter from "../../subcontent/autocounter";
import Whychooseus from "../../pages/about/whychooseus";

function AboutUs() {
  return (
    <div>
      <div className="aboutus-container">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12} lg={5} className="image-container">
              <div className="about-image">
                <img
                  src="https://themewagon.github.io/Edukate/img/about.jpg"
                  className="img-fluid h-100"
                />
              </div>
            </Col>

            <Col xs={12} sm={12} md={12} lg={7} className="about-text">
              <div className="aboutus-content ">
                <h6 className=" fs-5 about-text">About Us</h6>
                <div className=" info ">
                  <h1 className="text-dark display-4 fw-bold mb-4 ">
                    First Choice For Online Education Anywhere
                  </h1>
                  <p className="text-secondary mb-4 about-para">
                    Tempor erat elitr at rebum at at clita aliquyam consetetur.
                    Diam dolor diam ipsum et, tempor voluptua sit consetetur
                    sit. Aliquyam diam amet diam et eos sadipscing labore. Clita
                    erat ipsum et lorem et sit, sed stet no labore lorem sit.
                    Sanctus clita duo justo et tempor consetetur takimata
                    eirmod, dolores takimata consetetur invidunt magna dolores
                    aliquyam dolores dolore. Amet erat amet et magna
                  </p>
                </div>
                <Row xs={12} sm={12} md={12}>
                  <Col xs={12} sm={12} md={12}>
                    <AutoCounter />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="whychooseus-container">
        {" "}
        <Whychooseus />
      </div>
    </div>
  );
}
export default AboutUs;
