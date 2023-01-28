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
            <div
              style={{ cursor: "pointer", width: "fit-content !important" }}
              className="d-flex align-items-center justify-content-center gap-2"
            >
              <BsGithub size={40} />
              <p className="m-0 p-0 fs-2 fw-bolder">
                {" "}
                <Typewriter
                  options={{
                    strings: ["Mohd Hassan", "Web Developer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </p>
            </div>
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
              <p className={`m-0 p-0 fs-3 fw-bolder ${styles.hvr}`}>Projects</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
