import Header from "../../components/layout/header/header";
import Content from "../../content/content";
import GotoTop from "../../components/subcontent/gototop";
import Footer from "../../components/layout/footer/Footer";
import Ourcourses from "./ourcourses";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

function Courses() {
  return (
    <>
      <Header currentPage="Courses" />
      <Content
        Title="Courses"
        TitleTag="h1"
        Subtitle={
          <>
            <Link
              to="/home"
              className="text-light text-decoration-none fw-normal subtitle-link"
            >
              HOME
            </Link>
            <MdKeyboardDoubleArrowRight className="mx-2" />
            COURSES
          </>
        }
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
