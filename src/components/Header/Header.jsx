import React from "react";
import { BsGithub } from "react-icons/bs";
import styles from "../Home/Home.module.css";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col ">
            <a
              href="https://github.com/killshotxd"
              target="_blank"
              style={{ cursor: "pointer", width: "fit-content !important" }}
              className="d-flex z-3 align-items-center text-black text-decoration-none justify-content-center gap-2"
            >
              <BsGithub size={40} />
              <p className="m-0  p-0 fs-2 fw-bolder"> Mohd Hassan</p>
            </a>
          </div>
          <div className="col">
            <div className="d-flex align-items-center justify-content-center gap-5">
              <p
                onClick={() => {
                  navigate("/");
                }}
                className={`m-0 p-0 fs-3 fw-bolder ${styles.hvr}`}
              >
                Home
              </p>
              <p className={`m-0 p-0 fs-3 fw-bolder ${styles.hvr}`}>Connect?</p>
              <p
                onClick={() => {
                  navigate("/projects");
                }}
                className={`m-0 p-0 fs-3 fw-bolder ${styles.hvr}`}
              >
                Projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
