const CourseData = [
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

const courseDataWithIds = CourseData.map((course, index) => ({
  id: `course-${index + 1}`,
  ...course,
}));

export default courseDataWithIds;
