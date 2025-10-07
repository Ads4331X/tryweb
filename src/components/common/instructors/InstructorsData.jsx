const Datas = [
  {
    Profile: "https://themewagon.github.io/Edukate/img/team-1.jpg",
    Name: "Instructor Name",
    Course: "Web Design & Development",
    twitter: "#",
    facebook: "#",
    linkedin: "#",
    instagram: "#",
    youtube: "#",
  },
  {
    Profile: "https://themewagon.github.io/Edukate/img/team-2.jpg",
    Name: "Instructor Name",
    Course: "Web Design & Development",
    twitter: "#",
    facebook: "#",
    linkedin: "#",
    instagram: "#",
    youtube: "#",
  },
  {
    Profile: "https://themewagon.github.io/Edukate/img/team-3.jpg",
    Name: "Instructor Name",
    Course: "Web Design & Development",
    twitter: "#",
    facebook: "#",
    linkedin: "#",
    instagram: "#",
    youtube: "#",
  },
  {
    Profile: "https://themewagon.github.io/Edukate/img/team-4.jpg",
    Name: "Instructor Name",
    Course: "Web Design & Development",
    twitter: "#",
    facebook: "#",
    linkedin: "#",
    instagram: "#",
    youtube: "#",
  },
];

const InstructorData = Datas.map((instructorinfo, index) => ({
  id: `instructor-${index + 1}`,
  ...instructorinfo,
}));

export default InstructorData;
