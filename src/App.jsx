import Home from "./pages/home/home";
import Courses from "./pages/courses/courses";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import CourseDetailPage from "./pages/courses/CourseDetails/CourseDetailPage.jsx";
import InstructorPage from "./components/common/instructors/InstructorPage.jsx";
import OurFeatures from "./components/OurFeatures/OurFeatures.jsx";
import TestimonialPage from "./components/Testimonial/TestimonialPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "swiper/css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/courses" element={<Courses />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/testimonials" element={<TestimonialPage />}></Route>
        <Route path="/instructors" element={<InstructorPage />}></Route>
        <Route path="features" element={<OurFeatures />}></Route>
        <Route path="*" element={<Home />}></Route>
        <Route path="/course-detail" element={<CourseDetailPage />}></Route>
        <Route path="/courses/:id" element={<CourseDetailPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
