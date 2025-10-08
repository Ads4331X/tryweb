import Header from "../layout/header/header";
import Content from "../../content/content";
import Whychooseus from "../../pages/about/whychooseus";
import Footer from "../layout/footer/Footer";

function OurFeatures() {
  return (
    <>
      <Header />
      <Content
        Title="Features"
        TitleTag="h1"
        Subtitle="FEATURES"
        SubtitleTag="p"
        breadcrumbPath="/home"
        breadcrumbLabel="HOME"
        BgImg="https://themewagon.github.io/Edukate/img/page-header.jpg"
      />
      <Whychooseus page="features" />
      <Footer />
    </>
  );
}

export default OurFeatures;
