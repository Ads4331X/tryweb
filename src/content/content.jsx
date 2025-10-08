import "./content.css";
import Searchsection from "./Searchsection.jsx";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function Content(props) {
  const { TitleTag, Title, Subtitle, SubtitleTag, BgImg, breadcrumbPath, breadcrumbLabel } = props;

  return (
    <div>
      <div
        className="main-content"
        style={{
          backgroundImage: `linear-gradient(rgba(40, 120, 235, 0.9), rgba(40, 120, 235, 0.9)), url(${BgImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
          backgroundSize: "cover",
        }}
      >
        <div className="text-center content p-5 mb-4 text-light">
          <TitleTag className={`${TitleTag !== "p" ? "display-1" : "fs-2"} fw-bold`}>
            {Title}
          </TitleTag>

          <SubtitleTag className={`${SubtitleTag !== "p" ? "display-1 fw-bold" : "fw-normal subtitle-p"}`}>
            {breadcrumbPath && breadcrumbLabel ? (
              <>
                <Link to={breadcrumbPath} className="text-light text-decoration-none fw-normal subtitle-link">
                  {breadcrumbLabel}
                </Link>
                <MdKeyboardDoubleArrowRight className="mx-2" />
                {Subtitle}
              </>
            ) : (
              Subtitle
            )}
          </SubtitleTag>
        </div>

        <Searchsection />
      </div>
    </div>
  );
}

export default Content;