import React, { useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import styles from "./Section.module.css";
import Section2 from "./Section2";
import { FaCss3, FaHtml5, FaReact } from "react-icons/fa";
import {
  SiBootstrap,
  SiFirebase,
  SiGithub,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiVisualstudiocode,
  SiVite,
} from "react-icons/si";
import { Navigate, useNavigate } from "react-router-dom";
const Section1 = () => {
  const Navigate = useNavigate();
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();
  return (
    <>
      <section>
        <div className="container">
          <h2 className="text-center fw-bold mt-4">
            <RoughNotation type="underline" show={true}>
              <span className="">TECH STACK I USE :</span>
            </RoughNotation>
          </h2>
        </div>

        <div className="container">
          <div className="row" style={{ marginTop: "4rem" }}>
            <div className="col d-flex justify-content-center align-items-center">
              <button
                className={` mt-3 d-flex align-items-center gap-2 justify-content-center ${styles.button55}`}
              >
                HTML5 <FaHtml5 />
              </button>
            </div>
            <div className="col d-flex justify-content-center align-items-center">
              {" "}
              <button
                className={` mt-3 d-flex align-items-center gap-2 justify-content-center ${styles.button55}`}
              >
                CSS3 <FaCss3 />
              </button>
            </div>
            <div className="col d-flex justify-content-center align-items-center">
              {" "}
              <button
                className={` mt-3 d-flex align-items-center gap-2 justify-content-center ${styles.button55}`}
              >
                JavaScript <SiJavascript />
              </button>
            </div>
            <div className="col d-flex justify-content-center align-items-center">
              {" "}
              <button
                className={` mt-3 d-flex align-items-center gap-2 justify-content-center ${styles.button55}`}
              >
                ReactJs <FaReact />
              </button>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col d-flex justify-content-center align-items-center">
              <button
                className={` mt-3 d-flex align-items-center gap-2 justify-content-center ${styles.button55}`}
              >
                FireBase <SiFirebase />
              </button>
            </div>

            <div className="col d-flex justify-content-center align-items-center">
              <button
                className={` mt-3 d-flex align-items-center gap-2 justify-content-center ${styles.button55}`}
              >
                NextJs <SiNextdotjs />
              </button>
            </div>

            <div className="col d-flex justify-content-center align-items-center">
              <button
                className={` mt-3 d-flex align-items-center gap-2 justify-content-center ${styles.button55}`}
              >
                Github <SiGithub />
              </button>
            </div>

            <div className="col d-flex justify-content-center align-items-center">
              <button
                className={` mt-3 d-flex align-items-center gap-2 justify-content-center ${styles.button55}`}
              >
                vsCode <SiVisualstudiocode />
              </button>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col d-flex justify-content-center align-items-center">
              <button
                className={` mt-3 d-flex align-items-center gap-2 justify-content-center ${styles.button55}`}
              >
                Bootstrap <SiBootstrap />
              </button>
            </div>

            <div className="col d-flex justify-content-center align-items-center">
              <button
                className={` mt-3 d-flex align-items-center gap-2 justify-content-center ${styles.button55}`}
              >
                TailwindCss <SiTailwindcss />
              </button>
            </div>

            <div className="col d-flex justify-content-center align-items-center">
              <button
                className={` mt-3 d-flex align-items-center gap-2 justify-content-center ${styles.button55}`}
              >
                NodeJs <SiNodedotjs />
              </button>
            </div>

            <div className="col d-flex justify-content-center align-items-center">
              <button
                className={` mt-3 d-flex align-items-center gap-2 justify-content-center ${styles.button55}`}
              >
                Vite <SiVite />
              </button>
            </div>
          </div>

          {/* <div className="row mt-5">
            <h4 className="text-center mt-4 fw-bold">
              <RoughNotation type="underline" show={true}>
                <span className="">
                  I'm Very Proficient in these Technologies and other common
                  Frontend Tools also.
                </span>
              </RoughNotation>
            </h4>
          </div> */}
        </div>

        <div className="container">
          <div className="row" style={{ marginTop: "6rem" }}>
            <button
              onClick={() => {
                Navigate("/exp");
              }}
              className={` mt-3 ${styles.button55}`}
            >
              My Experience
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section1;
