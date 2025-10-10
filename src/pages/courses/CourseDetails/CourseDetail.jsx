import { Container, Row, Col } from "react-bootstrap";
import RelatedCourses from "./RelatedCourses";
import CourseFeatures from "./CourseFeatures";
import CourseCategories from "./CourseCategories";
import RecentCourses from "./RecentCourses";
import css from "./CourseDetails.module.css";


function CourseDetail() {
  return (
    <Container className="mt-5 pt-5 mb-5 pb-5">
      <Row className={css.Row}>
        <Col xs={12} sm={12} md={12} lg={8}>
          <div className="mb-5">
            <h6 className="fs-5">Course Detail</h6>
            <h1 className="display-4 fw-bold">
              Web design & development courses for beginners
            </h1>

            <img
              src="	https://themewagon.github.io/Edukate/img/header.jpg"
              className="img-fluid"
            />

            <p className="text-secondary mt-4 fw-normal">
              Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam
              dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam
              diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem
              et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
              tempor consetetur takimata eirmod, dolores takimata consetetur
              invidunt magna dolores aliquyam dolores dolore. Amet erat amet et
              magna
            </p>

            <p className="text-secondary fw-normal">
              Sadipscing labore amet rebum est et justo gubergren. Et eirmod
              ipsum sit diam ut magna lorem. Nonumy vero labore lorem sanctus
              rebum et lorem magna kasd, stet amet magna accusam consetetur
              eirmod. Kasd accusam sit ipsum sadipscing et at at sanctus et.
              Ipsum sit gubergren dolores et, consetetur justo invidunt at et
              aliquyam ut et vero clita. Diam sea sea no sed dolores diam
              nonumy, gubergren sit stet no diam kasd vero.
            </p>
          </div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={4} className={css.CourseFeatureCol}>
          {" "}
          <CourseFeatures />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={12} lg={8}>
          <div>
            <h2 className="mb-3 fw-bold">Related Courses</h2>
            <RelatedCourses />
          </div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={4}>
          <CourseCategories />
          <RecentCourses />
        </Col>
      </Row>
    </Container>
  );
}

export default CourseDetail;
