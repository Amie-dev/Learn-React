import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Product from "./page/Product";
import NotFound from "./page/NotFound";
import Men from "./page/Men";
import Women from "./page/Women";
import Courses from "./page/Courses";
import CoursesDetials from "./page/CoursesDetials";

function App() {
  return (
    <div className="bg-black  h-screen text-white">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CoursesDetials/>}/>

        <Route path="/about" element={<About />} />

        <Route path="/product" element={<Product />}>
          <Route path="/product/men" element={<Men />} />
          <Route path="/product/women" element={<Women />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
