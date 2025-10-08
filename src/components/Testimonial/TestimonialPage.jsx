import Content from "../../content/content";
import Header from "../layout/header/header";
import Testimonial from "../Testimonial/Testimonial";
import Footer from "../layout/footer/Footer";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function TestimonialPage() {
  return (
    <>
      {" "}
      <Header currentPage="Testimonial" />
      <Content
        Title="Testimonial"
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
            TESTIMONIAL
          </>
        }
        SubtitleTag="p"
        BgImg="https://themewagon.github.io/Edukate/img/page-header.jpg"
      />
      <Testimonial />
      <Footer />
    </>
  );
}

export default TestimonialPage;
