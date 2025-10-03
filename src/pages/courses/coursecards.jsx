import { Button } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

function Coursecards(props) {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column course-card p-0 m-0">
      <div className="course-img-container w-100">
        <img src={props.bgImg} className="img-fluid w-100 course-img" />
        <div className="course-text d-flex justify-content-end align-items-center flex-column text-center text-light">
          <div className="border-bottom text-center p-3">
            <h4 className="fw-bold ">{props.coursename}</h4>
          </div>
          <div className="d-flex justify-content-around align-items-center pt-5 course-info w-100 mb-2">
            <div className="d-flex align-items-center justify-content-center fs-5">
              <p>
                <FaUser />
              </p>
              <p className="fw-normal mt-2">&nbsp;{props.teachername}</p>
            </div>
            <div className="d-flex align-items-center justify-content-center fs-5">
              <p>
                <FaStar />
              </p>
              <p className="fw-normal mt-2">&nbsp;{props.rating}</p>
              <p className="font-monospace ms-2 fs-6 mt-2 small">
                ({props.ratednumber})
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Coursecards;
