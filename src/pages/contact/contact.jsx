import Header from "../../components/layout/header/header";
import Content from "../../content/content.jsx";
import GotoTop from "../../components/subcontent/gototop";
import Help from "../contact/Help/Help";
import Footer from "../../components/layout/footer/Footer";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <Header currentPage="Contact" />
      <Content
        Title="Contact"
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
            CONTACT
          </>
        }
        SubtitleTag="p"
        BgImg="https://themewagon.github.io/Edukate/img/page-header.jpg"
      />
      <GotoTop />
      <Help />
      <Footer />
    </>
  );
}

export default Contact;
