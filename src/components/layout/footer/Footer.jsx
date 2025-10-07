import css from "./footer.module.css";
import NewsLetter from "./NewsLetter.jsx";
import Morefooterinfo from "./Morefooterinfo.jsx";
import Copyright from "./Copyright.jsx";
import { Container, Row, Col } from "react-bootstrap";
import { IoSchool } from "react-icons/io5";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={`mt-5  ${css.footer} bg-dark text-light`}>
      {" "}
      <div
        className="text-light border-bottom border-secondary"
        style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
      >
        {" "}
        <Container className="position-relative mt-5 pt-5 ">
          <Row className="mb-5">
            <Col xs={12} sm={12} md={6} lg={6} className={`  mt-5 pt-5`}>
              <div>
                <h1>
                  <Link
                    to="/home"
                    className={`text-light text-decoration-none  ${css.link}`}
                  >
                    <h1>
                      {" "}
                      <IoSchool /> EDUKATE
                    </h1>
                  </Link>
                  <p className={`m-0 fw-normal fs-6 ${css.p}`}>
                    Accusam nonumy clita sed rebum kasd eirmod elitr. Ipsum ea
                    lorem at et diam est, tempor rebum ipsum sit ea tempor stet
                    et consetetur dolores. Justo stet diam ipsum lorem vero
                    clita diam
                  </p>
                </h1>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} className={`  mt-5 pt-5`}>
              <NewsLetter />
            </Col>
          </Row>

          <Morefooterinfo />
        </Container>
      </div>
      <Copyright />
    </div>
  );
}

export default Footer;
