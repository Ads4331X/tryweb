import css from "./footer.module.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function Copyright() {
  return (
    <Container className="d-flex justify-content-between align-items-center flex-wrap gap-2 pt-4 pb-2">
      <div>
        <p className={css.p}>
          Copyright ©{" "}
          <Link to="/home" className={`text-decoration-none ${css.p}`}>
            Your Site Name.
          </Link>{" "}
          All Rights Reserved.
        </p>
      </div>
      <div>
        <p className={css.p}>
          # Designed by{" "}
          <a href="#" className="text-light text-decoration-none">
            Ads
          </a>{" "}
          Distributed by{" "}
          <a href="#" className="text-light text-decoration-none">
            Ads
          </a>
        </p>
      </div>
    </Container>
  );
}

export default Copyright;
