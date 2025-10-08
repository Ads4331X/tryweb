import Header from "../../components/layout/header/header.jsx";
import Content from "../../content/content.jsx";
import GotoTop from "../../components/subcontent/gototop";
import AboutUs from "../about/AboutUs.jsx";
import Footer from "../../components/layout/footer/Footer";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <Header currentPage="About" />
      <Content
        Title="About"
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
            ABOUT
          </>
        }
        SubtitleTag="p"
        BgImg="https://themewagon.github.io/Edukate/img/page-header.jpg"
      />
      <GotoTop />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
