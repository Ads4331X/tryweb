import Header from "../../../components/layout/header/header";
import GotoTop from "../../../components/subcontent/gototop";
import Content from "../../../content/content";
import CourseDetail from "./CourseDetail";
import Footer from "../../../components/layout/footer/Footer";
function CourseDetailPage() {
  return (
    <>
      <Header currentpage="Course Detail" />
      <GotoTop />
      <Content
        Title="Course Detail"
        TitleTag="h1"
        Subtitle="COURSE DETAIL"
        SubtitleTag="p"
        breadcrumbPath="/home"
        breadcrumbLabel="HOME"
        BgImg="https://themewagon.github.io/Edukate/img/page-header.jpg"
      />
      <CourseDetail />
      <Footer />
    </>
  );
}

export default CourseDetailPage;
