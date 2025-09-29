import Coursecards from "./coursecards.jsx";
import "./ourcourses.css";
function Ourcourses() {
  let courseData = [
    {
      coursename: "Web design & development courses for beginners",
      teachername: "John Doe",
      rating: "4.5",
      ratednumber: "250",
      bgImg: "https://themewagon.github.io/Edukate/img/courses-1.jpg",
    },
    {
      coursename: "Web design & development courses for beginners",
      teachername: "John Doe",
      rating: "4.5",
      ratednumber: "250",
      bgImg: "https://themewagon.github.io/Edukate/img/courses-2.jpg",
    },
    {
      coursename: "Web design & development courses for beginners",
      teachername: "John Doe",
      rating: "4.5",
      ratednumber: "250",
      bgImg: "https://themewagon.github.io/Edukate/img/courses-3.jpg",
    },
    {
      coursename: "Web design & development courses for beginners",
      teachername: "John Doe",
      rating: "4.5",
      ratednumber: "250",
      bgImg: "https://themewagon.github.io/Edukate/img/courses-4.jpg",
    },
    {
      coursename: "Web design & development courses for beginners",
      teachername: "John Doe",
      rating: "4.5",
      ratednumber: "250",
      bgImg: "https://themewagon.github.io/Edukate/img/courses-5.jpg",
    },
    {
      coursename: "Web design & development courses for beginners",
      teachername: "John Doe",
      rating: "4.5",
      ratednumber: "250",
      bgImg: "https://themewagon.github.io/Edukate/img/courses-6.jpg",
    },
  ];
  return (
    <div>
      <div className=" d-flex justify-content-center align-items-center w-100">
        <div className=" text-center p-5 flex-column mt-5 w-50">
          <h6>Our Courses</h6>
          <h1 className="display-4 fw-bold text-center d-flex justify-content-center align-items-center flex-wrap">
            Checkout New Releases Of Our Courses
          </h1>
        </div>
      </div>
      <div className="d-flex justify-content-start align-items-center overflow-x-auto slide-bar">
        {courseData.map((course, index) => {
          return (
            <div key={index} className="card-wrapper">
              <Coursecards
                coursename={course.coursename}
                teachername={course.teachername}
                rating={course.rating}
                ratednumber={course.ratednumber}
                bgImg={course.bgImg}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Ourcourses;
