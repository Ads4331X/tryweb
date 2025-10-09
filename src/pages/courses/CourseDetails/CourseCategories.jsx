import { Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import css from "./CourseDetails.module.css";

function CourseCategories() {
  let navigate = useNavigate();
  const categories = {
    "Web Design": 150,
    "Web Development": 131,
    "Online Marketing": 78,
    "Keyword Research": 56,
    "Email Marketing": 98,
  };
  return (
    <div>
      <h2 className="mb-3 fw-bold">Categories</h2>
      <div>
        {Object.entries(categories).map(([key, value], index, arr) => {
          return (
            <div
              key={key}
              className={`d-flex justify-content-between align-items-center mb-3 ${
                index === arr.length - 1 ? "" : "border-bottom botder-seconday"
              }`}
            >
              <h5
                className={`fw-normal fs-6 pb-2 ${css.category}`}
                onClick={() => navigate(`/courses/course-${index + 1}`)}
              >
                {key}
              </h5>
              <Badge
                pill
                className="d-flex justify-content-center align-items-center "
              >
                {value}
              </Badge>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CourseCategories;
