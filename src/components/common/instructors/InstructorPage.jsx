import Header from "../../layout/header/header";
import Content from "../../../content/content.jsx";
import Instructor from "./Instructor";
import Footer from "../../layout/footer/Footer";

function InstructorPage() {
  return (
    <>
      <Header currentPage="Instructor" />
      <Content
        Title="Instructors"
        TitleTag="h1"
        Subtitle="INSTRUCTORS"
        SubtitleTag="p"
        breadcrumbPath="/home"
        breadcrumbLabel="HOME"
        BgImg="https://themewagon.github.io/Edukate/img/page-header.jpg"
      />
      <Instructor />
      <Footer />
    </>
  );
}

export default InstructorPage;
