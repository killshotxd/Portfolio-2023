import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Section2 from "./components/Sections/Section2";

const App = () => {
  const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 });
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
  return (
    <BrowserRouter>
      <div
        className="cursor"
        style={{
          transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`,
        }}
      />

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exp" element={<Section2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
