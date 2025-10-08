import Header from "../../../components/layout/header/header";
import Content from "../../../content/content";
import CourseDetail from "../../../pages/courses/CourseDetails/CourseDetail";
import Footer from "../../../components/layout/footer/Footer";
function CourseDetailPage() {
  return (
    <>
      <Header currentpage="Course Detail" />
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
