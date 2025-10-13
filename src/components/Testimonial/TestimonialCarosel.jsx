import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import css from "./Testimonial.module.css";

import { FaQuoteLeft } from "react-icons/fa";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

import { useEffect, useState } from "react";
import axios from "axios";

function TestimonialCarosel() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get(`../api/StudentsTestimonial.json`)
      .then((res) => {
        const StudentsTestimonialIDs = res.data.map((student, index) => ({
          id: `student-${index + 1}`,
          ...student,
        }));
        setStudents(StudentsTestimonialIDs);
      })
      .catch((err) => {
        console.error("Error fetching testimonials:", err);
      });
  }, []);

  const hasEnoughSlides = students.length > 1;

  return (
    <Container className="p-0 ps-lg-4 position-relative bg-white mt-0">
      {hasEnoughSlides && (
        <div className={css.ButtonContainer}>
          <div className="d-flex justify-content-center align-items-center ">
            <div
              className={`testimonial-button-prev ${css.prev} text-light fw-bold fs-4`}
            >
              <RiArrowLeftSLine />
            </div>
            <div
              className={`testimonial-button-next ${css.next} text-white fw-bold fs-4`}
            >
              <RiArrowRightSLine />
            </div>
          </div>
        </div>
      )}

      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 4500,
          disableOnInteraction: true,
        }}
        navigation={
          hasEnoughSlides
            ? {
                prevEl: ".testimonial-button-prev",
                nextEl: ".testimonial-button-next",
              }
            : false
        }
        loop={hasEnoughSlides}
        slidesPerView={1}
        slidesPerGroup={1}
      >
        {students.map((student) => (
          <SwiperSlide key={student.id}>
            <div className="m-3 m-lg-3 p-1">
              <div className={`fs-1 text-primary mb-4 ${css.Icon}`}>
                <FaQuoteLeft />
              </div>
              <div>
                <p className="text-secondary fw-normal">
                  {student.Information}
                </p>
              </div>
              <div className={`mt-4 d-flex gap-4 ${css.StudentInfo}`}>
                <span>
                  <img
                    src={student.ProfilePic}
                    className={css.img}
                    alt={student.StdName}
                  />
                </span>
                <div>
                  <h5>{student.StdName}</h5>
                  <span className="fs-6 text-secondary">
                    {student.StdCourse}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default TestimonialCarosel;
