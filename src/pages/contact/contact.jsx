import Header from "../../components/layout/header/header";
import Content from "../../content/content.jsx";
import GotoTop from "../../components/subcontent/gototop";
import Help from "../contact/Help/Help";
import Footer from "../../components/layout/footer/Footer";

function Contact() {
  return (
    <>
      <Header currentPage="Contact" />
      <Content
        Title="Contact"
        TitleTag="h1"
        Subtitle="CONTACT"
        breadcrumbPath="/home"
        breadcrumbLabel="HOME"
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
