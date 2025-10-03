import React from "react";
import courseDataWithIds from "../CourseData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/autoplay";
import { FaUser } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

import { Button, Container } from "react-bootstrap";

import css from "./CourseCarousel.module.css";

const CourseCarousel = () => {
  return (
    // <Container className="border-0">
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
            className={`bg-white text-light ${css.sliderItem}`}
            key={course.id}
          >
            <div className={css.swiperSlide}>
              <img src={course.bgImg} alt={course.title} />
              <div className={css.courseCard}>
                <h3 className="p-3 fs-4 text-center">{course.coursename}</h3>
                <div className="border-bottom" />
                <div className="d-flex justify-content-between  p-3">
                  <h4 className="fs-6">
                    {" "}
                    <FaUser /> &nbsp;
                    {course.teachername}
                  </h4>
                  <div>
                    <span className="fs-6">
                      <FaStar /> &nbsp;
                      {course.rating}( {course.ratednumber})
                    </span>
                  </div>
                </div>
                <div className="p-3 d-flex align-items-center justify-content-center bg-white border-0">
                  <Button variant="primary">Course Details</Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    // </Container>
  );
};

export default CourseCarousel;
