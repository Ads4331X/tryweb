import { Card } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

function Coursecards(props) {
  return (
    <Card className="text-light course-card w-100 h-100">
      <Card.Body
        className="text-center d-flex align-items-end justify-content-end flex-column card-body position-relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(18, 15, 45, 0), #120f2d), url(${props.bgImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
        }}
      >
        <div>
          <h4 className="fw-bold">{props.coursename}</h4>
          <hr className="course-hr" />
          <div className="d-flex justify-content-between align-items-center  pt-5 course-info ">
            <div className="d-flex align-items-center justify-content-center fs-5">
              <p>
                <FaUser />
              </p>
              <p className="fw-normal mt-2"> &nbsp;{props.teachername}</p>
            </div>
            <div className="d-flex align-items-center justify-content-center fs-5">
              <p>
                <FaStar />
              </p>
              <p className="fw-normal mt-2"> &nbsp;{props.rating}</p>
              <p className="font-monospace ms-2 fs-6 mt-2 small">
                ({props.ratednumber})
              </p>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
export default Coursecards;
