const Testimonials = [
  {
    Information:
      "Sed et elitr ipsum labore dolor diam, ipsum duo vero sed sit est est ipsum eos clita est ipsum. Est nonumy tempor at kasd. Sed at dolor duo ut dolor, et justo erat dolor magna sed stet amet elitr duo lorem",
    ProfilePic: "https://themewagon.github.io/Edukate/img/testimonial-1.jpg",
    StdName: "Student Name",
    StdCourse: "Web Design",
  },
  {
    Information:
      "Sed et elitr ipsum labore dolor diam, ipsum duo vero sed sit est est ipsum eos clita est ipsum. Est nonumy tempor at kasd. Sed at dolor duo ut dolor, et justo erat dolor magna sed stet amet elitr duo lorem",
    ProfilePic: "https://themewagon.github.io/Edukate/img/testimonial-2.jpg",
    StdName: "Student Name",
    StdCourse: "Web Design",
  },
];

export const StudentsTestimonial = Testimonials.map((student, index) => ({
  id: `student-${index + 1}`,
  ...student,
}));
