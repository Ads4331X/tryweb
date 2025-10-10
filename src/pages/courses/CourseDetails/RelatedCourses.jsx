import { Container, Row, Col } from "react-bootstrap";
import courseDataWithIds from "../CourseData";
import { FaUser } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import css from "../CourseScaler/CourseScaler.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { useNavigate } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";

function RelatedCourses() {
  let navigate = useNavigate();
  return (
    <Container className="position-relative mb-5">
      <div className={css.ButtonContainer}>
        <div
          className={`swiper-button-prev ${css.prev}  text-light fw-bold fs-4`}
        >
          <RiArrowLeftSLine />
        </div>
        <div
          className={`swiper-button-next ${css.next} text-white fw-bold fs-4`}
        >
          <RiArrowRightSLine />
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        loop={true}
        slidesPerView={1}
        spaceBetween={-20}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
      >
        {courseDataWithIds.map((course) => (
          <SwiperSlide
            className={` text-light ${css.ScalerContainer} d-flex justify-content-center align-items-center `}
            key={course.id}
          >
            <Col
              xs={10}
              sm={10}
              md={10}
              lg={10}
              xl={10}
              onClick={() => navigate(`/courses/${course.id}`)}
            >
              <div className={css.Scaler}>
                <div className={css.ImgContainer}>
                  <img
                    src={course.bgImg}
                    alt={course.title}
                    className="w-100 h-100 img-fluid"
                  />
                </div>
                <div className={css.overlay} />
                <div className={css.courseCard}>
                  <h3 className={`pb-3 pt-3 text-center ${css.courseTitle}`}>
                    {course.coursename}
                  </h3>
                  <div className="border-bottom" />
                  <div className="d-flex justify-content-between p-3">
                    <h4 className="fs-6">
                      <FaUser /> &nbsp;
                      {course.Instructor}
                    </h4>
                    <div>
                      <span className="fs-6">
                        <FaStar /> &nbsp;
                        {course.rating}&nbsp;
                        <small className="fw-normal">
                          ({course.ratednumber})
                        </small>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default RelatedCourses;
