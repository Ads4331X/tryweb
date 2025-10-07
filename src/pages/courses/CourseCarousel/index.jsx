import courseDataWithIds from "../CourseData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import { FaUser } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

import { Button, Container } from "react-bootstrap";

import css from "./CourseCarousel.module.css";

const CourseCarousel = () => {
  return (
    <Container>
      <Swiper
        modules={{ Autoplay }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={1}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
          1400: {
            slidesPerView: 5,
          },
        }}
      >
        {courseDataWithIds.map((course) => (
          <SwiperSlide
            className={`text-light ${css.sliderItem}`}
            key={course.id}
          >
            <div className={css.swiperSlide}>
              <img
                src={course.bgImg}
                alt={course.title}
                className="w-100 img-fluid"
              />
              <div className={css.overlay} />
              <div className={css.courseCard}>
                <h3 className="p-3 fs-4 text-center">{course.coursename}</h3>
                <div className="border-bottom" />
                <div className="d-flex justify-content-between  p-3">
                  <h4 className="fs-6">
                    <FaUser /> &nbsp;
                    {course.teachername}
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
            <div
              className={`p-4 d-flex align-items-center justify-content-center bg-white ${css.actionButton}`}
            >
              <Button variant="primary" className="border-0">
                Course Details
              </Button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>{" "}
    </Container>
  );
};

export default CourseCarousel;
