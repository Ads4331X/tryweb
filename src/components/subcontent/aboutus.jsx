import "bootstrap/dist/css/bootstrap.min.css";
import "./aboutus.css";
function AboutUs() {
  return (
    <div className="sub-content container-fluid about-us p-3 d-flex align-items-center flex-column flex-md-row">
      <div>
        <img
          src="https://themewagon.github.io/Edukate/img/about.jpg"
          className="w-100 h-100"
        />
      </div>
      <div className="about-text">
        <span>ABOUT US</span>
      </div>
    </div>
  );
}
export default AboutUs;
