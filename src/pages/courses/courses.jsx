import Header from "../../components/layout/header/header";
import Content from "../../content/content";
import GotoTop from "../../components/subcontent/gototop";
import Footer from "../../components/layout/footer/Footer";
import Ourcourses from "./ourcourses";

function Courses() {
  return (
    <>
      <Header currentPage="Courses" />
      <Content
        Title="Courses"
        TitleTag="h1"
        Subtitle="COURSES"
        breadcrumbPath="/home"
        breadcrumbLabel="HOME"
        SubtitleTag="p"
        BgImg="https://themewagon.github.io/Edukate/img/page-header.jpg"
      />
      <Ourcourses pagination={true} />
      <GotoTop />
      <Footer />
    </>
  );
}

export default Courses;
