import Header from "../../components/layout/header/header";
import Content from "../../content/content";
import GotoTop from "../../components/subcontent/gototop";
import AboutUs from "../about/AboutUs.jsx";
import Ourcourses from "../courses/ourcourses";
import Discount from "../../components/subcontent/discount/Discount";
import Instructor from "../../components/common/instructors/Instructor";
import Testimonial from "../../components/Testimonial/Testimonial";
import Help from "../contact/Help/Help";
import Footer from "../../components/layout/footer/Footer";

function Home() {
  return (
    <>
      <Header currentPage="Home" />
      <Content
        Title="Learn From Home"
        TitleTag="p"
        Subtitle="Education Courses"
        SubtitleTag="h1"
        BgImg="https://themewagon.github.io/Edukate/img/header.jpg"
      />
      <GotoTop />
      <AboutUs />
      <Ourcourses />
      <Discount />
      <Instructor />
      <Testimonial />
      <Help />
      <Footer />
    </>
  );
}

export default Home;
