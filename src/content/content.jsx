import "./content.css";
import Searchsection from "./Searchsection.jsx";

function Content(props) {
  const TitleTag = props.TitleTag;
  const Title = props.Title;
  const Subtitle = props.Subtitle;
  const SubtitleTag = props.SubtitleTag;
  const BgImg = props.BgImg;
  return (
    <div>
      <div
        className="main-content"
        style={{
          backgroundImage: `linear-gradient(rgba(40, 120, 235, 0.9), rgba(40, 120, 235, 0.9)), url(${BgImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
          backgroundSize: "cover  ",
        }}
      >
        <div className="text-center content p-5 mb-4 text-light">
          <TitleTag
            className={` ${TitleTag !== "p" ? "display-1" : " fs-2"} fw-bold `}
          >
            {Title}
          </TitleTag>
          <SubtitleTag
            className={` ${
              SubtitleTag !== "p"
                ? "display-1 fw-bold"
                : "fw-normal  subtitle-p"
            } `}
          >
            {Subtitle}
          </SubtitleTag>
        </div>
        <Searchsection />
      </div>
    </div>
  );
}

export default Content;
