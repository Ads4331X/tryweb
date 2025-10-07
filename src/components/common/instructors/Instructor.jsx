import InstructorCarosel from "./instructorcarosel/InstructorCarosel";

function Instructor() {
  return (
    <div className="pt-5 mt-5 py-5 mb-5">
      <span className="d-flex justify-content-center mb-2">
        <h6 className="fw-normal fs-5 ">INSTRUCTORS</h6>
      </span>
      <span className=" p-5">
        <h1 className="fw-bold text-center">Meet Our Instructors</h1>
      </span>
      <InstructorCarosel />
    </div>
  );
}
export default Instructor;
