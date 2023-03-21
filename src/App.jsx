import React, { useState, useEffect, lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
// import Section2 from "./components/Sections/Section2";
// import Projects from "./components/Projects/Projects";
import Lottie from "react-lottie";
import load from "./assets/98431-loading-animation.json";
import { FaDownload } from "react-icons/fa";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const Home = lazy(() => import("./components/Home/Home"));
const Section2 = lazy(() => import("./components/Sections/Section2"));
const Projects = lazy(() => import("./components/Projects/Projects"));

const App = () => {
  const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(true);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: load,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    const moveCursor = (e) => {
      const x = e.clientX - 16;
      const y = e.clientY - 16;
      setCursorXY({ x, y });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setVisible(false);
    }, 5000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const handleClick = () => {
    setVisible(!visible);
  };
  return (
    <BrowserRouter>
      <div
        className="cursor"
        style={{
          transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`,
        }}
      />

      <Header />
      <>
        {visible && (
          <>
            <div className="download-buttons" onClick={handleClick}>
              <div className="download-button" onClick={handleClick}>
                <BsFillArrowRightCircleFill />
              </div>
              <a href="../src/assets/Mohd's Resume (7).pdf" download>
                <FaDownload /> RESUME
              </a>
            </div>
          </>
        )}
        {!visible && (
          <div className="download-button" onClick={handleClick}>
            <BsFillArrowLeftCircleFill />
          </div>
        )}
      </>
      <Suspense
        fallback={
          <div className="d-flex m-auto justify-content-center align-items-center h-100">
            {" "}
            <Lottie
              options={defaultOptions}
              height={100}
              width={100}
              style={{ margin: 0 }}
            />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exp" element={<Section2 />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
