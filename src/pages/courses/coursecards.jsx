import { Card, Button } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

function Coursecards(props) {
  // return (
  //   <Card className="text-light course-card border-0 ">
  //     <Card.Body
  //       className="text-center  d-flex align-items-center justify-content-end flex-column  course-info-container "
  //       style={{
  //         backgroundImage: `linear-gradient(to bottom, rgba(18, 15, 45, 0), #120f2d), url(${props.bgImg})`,
  //         backgroundSize: "cover",
  //         backgroundRepeat: "no-repeat",
  //         backgroundPosition: "center",
  //       }}
  //     >
  //       <div>
  //         {" "}
  //         <img
  //           src={`${props.bgImg}`}
  //           className="img-fluid w-100 h-100"
  //           style={{
  //             backgroundImage: `linear-gradient(to bottom, rgba(18, 15, 45, 0), #120f2d),`,
  //           }}
  //         />
  //       </div>
  //       <div className="course-container">
  //         <h4 className="fw-bold">{props.coursename}</h4>
  //         <hr className="course-hr" />
  //         <div className="d-flex justify-content-around align-items-center  pt-5 course-info ">
  //           <div className="d-flex align-items-center justify-content-center fs-5">
  //             <p>
  //               <FaUser />
  //             </p>
  //             <p className="fw-normal mt-2"> &nbsp;{props.teachername}</p>
  //           </div>
  //           <div className="d-flex align-items-center justify-content-center fs-5">
  //             <p>
  //               <FaStar />
  //             </p>
  //             <p className="fw-normal mt-2"> &nbsp;{props.rating}</p>
  //             <p className="font-monospace ms-2 fs-6 mt-2 small">
  //               ({props.ratednumber})
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //     </Card.Body>
  //   </Card>
  // );

  return (
    <div className="d-flex justify-content-center align-items-center flex-column course-card">
      <div
      className="course-img-container"
        style={{
          position: "relative",
          width: "100%",
          height: "auto",
        }}
      >
        <img
          src={props.bgImg}
          style={{ objectFit: "cover", display: "block" }}
          className="img-fluid w-100 course-img"
        />
        <div
          className="text-light"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            // backgroundImage: `linear-gradient(to bottom, rgba(18, 15, 45, 0), #120f2d)`,
          }}
        >
          <div className="course-text d-flex justify-content-end align-items-center flex-column text-center">
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
    </div>
  );
}
export default Coursecards;
