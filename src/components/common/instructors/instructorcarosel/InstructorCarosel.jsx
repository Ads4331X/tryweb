import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import InstructorData from "../InstructorsData";
import { Container } from "react-bootstrap";
import css from "./InstructorCarosel.module.css";

import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";

import {
  FaTwitter,
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function InstructorCarosel() {
  return (
    <Container className={`position-relative ${css.Container}`}>
      <Swiper
        className="ms-5 me-5"
        modules={[Autoplay, Navigation]}
        speed={1200}
        autoplay={{ delay: 4500, disableOnInteraction: true }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          992: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        {InstructorData.map((instructor) => (
          <SwiperSlide key={instructor.id} className={css.Slide}>
            <div className={css.SliderItem}>
              <div className={css.ImgContainer}>
                <img
                  src={instructor.Profile}
                  className={`img-fluid ${css.img}`}
                  alt={instructor.Name}
                />
              </div>
              <div className={`p-4 ${css.InfoContainer} text-center`}>
                <h5 className="mb-3">{instructor.Name}</h5>
                <p className="fw-normal text-secondary mb-2">
                  {instructor.Course}
                </p>
                <div className="d-flex justify-content-center gap-2 text-primary">
                  {instructor.twitter && (
                    <a
                      href={instructor.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter />
                    </a>
                  )}
                  {instructor.facebook && (
                    <a
                      href={instructor.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebookF />
                    </a>
                  )}
                  {instructor.linkedin && (
                    <a
                      href={instructor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedinIn />
                    </a>
                  )}
                  {instructor.instagram && (
                    <a
                      href={instructor.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram />
                    </a>
                  )}
                  {instructor.youtube && (
                    <a
                      href={instructor.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaYoutube />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

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
    </Container>
  );
}

export default InstructorCarosel;
