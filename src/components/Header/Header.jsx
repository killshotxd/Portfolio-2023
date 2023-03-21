import React from "react";
import { BsGithub } from "react-icons/bs";
import styles from "../Home/Home.module.css";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import dev from "../../assets/18123-developer.json";
const Header = () => {
  const navigate = useNavigate();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: dev,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          <div className="col ">
            <a
              href="https://github.com/killshotxd"
              target="_blank"
              style={{ cursor: "pointer", width: "fit-content !important" }}
              className="d-flex z-3 align-items-center text-black text-decoration-none justify-content-center gap-2"
            >
              <Lottie
                options={defaultOptions}
                height={100}
                width={100}
                style={{ margin: 0 }}
              />
              <p className="m-0  p-0 fs-2 fw-bolder"> Mohd Hassan</p>
            </a>
          </div>
          <div className="col">
            <div className="d-flex align-items-center justify-content-center gap-4 ">
              <p
                onClick={() => {
                  navigate("/");
                }}
                className={`m-0 p-0 fs-3 fw-bolder ${styles.hvr}`}
              >
                Home
              </p>
              {/* <p className={`m-0 p-0 fs-3 fw-bolder ${styles.hvr}`}>Connect?</p> */}
              <p
                onClick={() => {
                  navigate("/projects");
                }}
                className={`m-0 p-0 fs-3 fw-bolder ${styles.hvr}`}
              >
                Projects
              </p>
              <p
                onClick={() => {
                  navigate("/exp");
                }}
                className={`m-0 p-0 fs-3 fw-bolder ${styles.hvr}`}
              >
                Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
