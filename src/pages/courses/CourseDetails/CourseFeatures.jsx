import courseDataWithIds from "../CourseData";
import { Button } from "react-bootstrap";

function CourseFeatures() {
  const course = courseDataWithIds[0];

  const datatoshow = {
    Instructor: course.Instructor,
    Rating: (
      <>
        {course.rating}{" "}
        <small className="fw-normal">({course.ratednumber})</small>
      </>
    ),
    Lectures: course.lectures,
    Duration: course.duration,
    "Skill level": course.skillLevel,
    Language: course.language,
    "Course Price": course.price,
  };
  return (
    <div className="bg-primary text-light mb-5 d-flex justify-content-start align-items-center">
      <div className="w-100 mt-3">
        <h3 className="py-3 px-4">Course Features</h3>
        <div>
          {Object.entries(datatoshow).map(([key, value], index, arr) => (
            <div
              key={key}
              className={`px-4 my-3 pb-3  d-flex justify-content-between align-items-center ${
                index !== arr.length - 1 ? "border-bottom" : ""
              }`}
            >
              <h6 className="text-white text-decoration-none fs-5">{key}:</h6>
              <h6 className="text-white text-decoration-none fs-5">{value}</h6>
            </div>
          ))}

          <div className="d-flex justify-content-center align-items-center w-100 px-4 pb-3 mb-2">
            <Button variant="danger" className="w-100 p-3 fs-5 fw-bold">
              Enroll Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseFeatures;
