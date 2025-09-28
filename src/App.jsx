import Home from "./components/pages/home/home";
import Courses from "./components/pages/courses/courses";
import About from "./components/pages/about/about";
import Contact from "./components/pages/contact/contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
