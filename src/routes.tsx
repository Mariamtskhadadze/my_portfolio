import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Blogs from "./pages/BlogsPage";
import ContactMe from "./pages/ContactMe";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/contact" element={<ContactMe />} />
    </Routes>
  );
};

export default AppRoutes;
