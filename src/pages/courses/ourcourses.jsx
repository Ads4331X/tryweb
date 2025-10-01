import "./ourcourses.css";
import Slider from "./courseslider.jsx";

function Ourcourses() {
  return (
    <div>
      <div className=" d-flex justify-content-center align-items-center w-100">
        <div className=" text-center p-3 flex-column mt-5 w-50">
          <h6>Our Courses</h6>
          <h1 className="display-4 fw-bold text-center d-flex justify-content-center align-items-center flex-wrap">
            Checkout New Releases Of Our Courses
          </h1>
        </div>
      </div>
      <Slider />
    </div>
  );
}
export default Ourcourses;
