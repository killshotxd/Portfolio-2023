import React from "react";
import styles from "./Home.module.css";
import { BsGithub } from "react-icons/bs";
import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <>
      <div className={styles.parallax}>
        <div id={styles.stars1}></div>
        <div id={styles.stars2}></div>
        <div id={styles.stars3}></div>

        {/* START HOME */}

        <div className="container">
          <div className="row">
            <div className="col ">
              <div
                style={{ cursor: "pointer", width: "fit-content !important" }}
                className="d-flex align-items-center justify-content-center gap-2"
              >
                <BsGithub size={40} />
                <p className="m-0 p-0 fs-2">
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
                <p className={`m-0 p-0 fs-3 ${styles.hvr}`}>Connect?</p>
                <p className={`m-0 p-0 fs-3 ${styles.hvr}`}>Projects</p>
              </div>
            </div>
          </div>
        </div>

        {/* HEADER END */}

        {/* HEADINGS */}

        <div className="container">
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>

        {/* HEADINGS END */}
      </div>
    </>
  );
};

export default Home;
