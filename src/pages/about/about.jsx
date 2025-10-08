import Header from "../../components/layout/header/header.jsx";
import Content from "../../content/content.jsx";
import GotoTop from "../../components/subcontent/gototop";
import AboutUs from "../about/AboutUs.jsx";
import Footer from "../../components/layout/footer/Footer";

function About() {
  return (
    <>
      <Header currentPage="About" />
      <Content
        Title="About"
        TitleTag="h1"
        Subtitle="ABOUT"
        breadcrumbPath="/home"
        breadcrumbLabel="HOME"
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
