import { Container, Row, Col } from "react-bootstrap";
import courseDataWithIds from "../CourseData";
import { FaUser } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import css from "./CourseScaler.module.css";
import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { RiArrowLeftDoubleFill, RiArrowRightDoubleFill } from "react-icons/ri";

function CourseScaler() {
  const [page, setpage] = useState(1);
  const itemsperpage = 6;
  const totalpage = Math.ceil(courseDataWithIds.length / itemsperpage);

  const startIndex = (page - 1) * itemsperpage;
  const endIndex = startIndex + itemsperpage;
  const courseData = courseDataWithIds.slice(startIndex, endIndex);

  const HandielEventChange = (event, value) => {
    setpage(value);
  };

  return (
    <Container>
      <Row className="g-3">
        {courseData.map((course) => (
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={4}
            key={course.id}
            className={`${css.ScalerContainer} text-light`}
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
          </Col>
        ))}
      </Row>
      <div className="d-flex justify-content-center mb-5 mt-5 pb-5 ">
        <Pagination
          count={totalpage}
          page={page}
          onChange={HandielEventChange}
          showFirstButton
          showLastButton
          variant="outlined"
          color="secondary"
          size="large"
          shape="rounded"
          renderItem={(item) => (
            <PaginationItem
              {...item}
              slots={{
                first: RiArrowLeftDoubleFill,
                last: RiArrowRightDoubleFill,
              }}
            />
          )}
          sx={{
            "& .MuiPaginationItem-root": {
              margin: 0,
              color: "#2878eb",
              backgroundColor: "white",
              "&:focus": {
                backgroundColor: "#71a9f8de",
                color: "white",
                borderColor: "#2878eb",
                outline: "none",
              },
              "&:active": {
                backgroundColor: "#2878eb",
                color: "white",
                borderColor: "#2878eb",
              },
            },
            "& .MuiPaginationItem-root.Mui-selected:hover": {
              backgroundColor: "#2878eb",
              color: "white",
              borderColor: "#2878eb",
            },
            "& .MuiPaginationItem-outlinedSecondary": {
              borderColor: "#ccc",
            },
            "& .MuiPaginationItem-outlinedSecondary.Mui-selected": {
              backgroundColor: "#6c63ff",
              color: "#fff",
              borderColor: "#6c63ff",
            },
            "& .MuiPaginationItem-root.Mui-selected": {
              color: "white",
              backgroundColor: "#2878eb",
            },
          }}
        />
      </div>
    </Container>
  );
}

export default CourseScaler;
