import Home from "./components/pages/home/home.jsx";
import Courses from "./components/pages/courses/courses.jsx";
import About from "./components/pages/about/about.jsx";
import Contact from "./components/pages/contact/contact.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Home, Courses, About, Contact } from "./components/pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Courses" element={<Courses />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
