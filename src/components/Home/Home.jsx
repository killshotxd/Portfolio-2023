import React, { useRef } from "react";
import styles from "./Home.module.css";
import { BsGithub } from "react-icons/bs";
import Typewriter from "typewriter-effect";
const Home = () => {
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();
  return (
    <>
      <div className={styles.parallax}>
        <div id={styles.stars1}></div>
        <div id={styles.stars2}></div>
        <div id={styles.stars3}></div>

        {/* START HOME */}
        <section id="1" style={{ height: "100vh" }}>
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
                  <p className={`m-0 p-0 fs-3 fw-bolder ${styles.hvr}`}>
                    Connect?
                  </p>
                  <p className={`m-0 p-0 fs-3 fw-bolder ${styles.hvr}`}>
                    Projects
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* HEADER END */}

          {/* HEADINGS */}

          <div
            className="container d-flex flex-column justify-content-center align-items-center"
            style={{ marginTop: "12rem" }}
          >
            <h2 className="fw-bolder">
              Hello, Myself{" "}
              <span style={{ color: "#005b87" }}>MOHD HASSAN</span> 😁
            </h2>
            <h3 className="fw-bolder mt-3">
              Welcome To My Portfolio ({new Date().getFullYear()})
            </h3>
            <h3 className="fw-bolder mt-3">
              {" "}
              <Typewriter
                options={{
                  strings: [
                    "I'm a Frontend Web Developer",
                    "I'm Familiar with these Tech Stacks :",
                    "HTML, CSS, JavaScript, NodeJs, ReactJs, NextJs, FireBase, TailwindCss and BootStrap",
                    "Explore More 👇🏻",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h3>

            <button
              onClick={executeScroll}
              className={` mt-3 ${styles.button55}`}
            >
              Know More
            </button>
          </div>

          {/* HEADINGS END */}
        </section>

        <section style={{ height: "100vh" }} ref={myRef} id="2">
          Hello
        </section>
      </div>
    </>
  );
};

export default Home;
