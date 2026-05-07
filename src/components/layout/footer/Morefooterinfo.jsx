import { Col, Row } from "react-bootstrap";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import css from "./footer.module.css";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";

import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Morefooterinfo() {
  return (
    <Row className="mb-5 pb-5">
      <Col xs={12} md={4} lg={4}>
        <h3 className="mb-4">Get in Touch</h3>
        <p className={css.p}>
          <FaLocationDot /> 123 Street, New York, USA
        </p>
        <p className={css.p}>
          <IoCall /> +012 345 67890
        </p>
        <p className={css.p}>
          <IoMdMail /> info@example.com
        </p>
        <div className="d-flex gap-2 fs-2 mb-4">
          <a href="#" className={css.socialLink} aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#" className={css.socialLink} aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" className={css.socialLink} aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="#" className={css.socialLink} aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </Col>
      <Col xs={12} md={4} lg={4}>
        <h3 className="mb-4">Our Courses</h3>
        <div className="d-flex flex-column gap-2 mb-4">
          {["Web Design", "Apps Design", "Marketing", "Research", "SEO"].map(
            (text, i) => (
              <Link
                key={i}
                to="#"
                className={`${css.p} text-decoration-none  d-inline-flex align-items-center fs-5`}
                style={{ width: "fit-content" }}
              >
                <span className={css.arrow}>
                  <RiArrowRightSLine />
                </span>
                <span className={css.link}>{text}</span>
              </Link>
            )
          )}
        </div>
      </Col>
      <Col xs={12} md={4} lg={4}>
        <h3 className="mb-4">Quick Links</h3>
        <div className="d-flex flex-column gap-2 mb-4">
          {[
            "Privacy Policy",
            "Terms & Conditions",
            "Regural FAQs",
            "Help & Support",
            "Contact",
          ].map((text, i) => (
            <Link
              key={i}
              to="#"
              className={`${css.p} text-decoration-none d-inline-flex align-items-center fs-5`}
              style={{ width: "fit-content" }}
            >
              <span className={css.arrow}>
                <RiArrowRightSLine />
              </span>
              <span className={css.link}>{text}</span>
            </Link>
          ))}
        </div>
      </Col>
    </Row>
  );
}

export default Morefooterinfo;
