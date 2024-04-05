import { Route, Routes } from "react-router-dom";

import "./App.css";
import Contact from "./Component/Contact/Contact";
import Course from "./Component/Course/Course";
import Navbar from "./Navbar/Navbar";
import Home from "./Component/Home/Home";
import Staff from "./Component/Staff/Staff";
import About from "./Component/About/About";
import Footer from "./Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Course" element={<Course />} />
        <Route path="/about" element={<About />} />
        <Route path="/staff" element={<Staff />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
