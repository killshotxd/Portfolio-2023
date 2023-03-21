import React, { useRef } from "react";
import styles from "./Home.module.css";
import Lottie from "react-lottie";
import animationData from "../../assets/22.json";
import Typewriter from "typewriter-effect";
import Section1 from "../Sections/Section1";
const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
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
          {/* HEADINGS */}

          <div
            className="container d-flex flex-column justify-content-center align-items-center"
            style={{ marginTop: "6rem" }}
          >
            <h2 className="fw-bolder">
              Hello, Myself{" "}
              <span style={{ color: "#005b87" }}>MOHD HASSAN</span>
            </h2>

            <Lottie options={defaultOptions} height={300} width={300} />
            <h3 className="fw-bolder mt-3">
              Welcome To My Portfolio ({new Date().getFullYear()})
            </h3>
            <h3 className="fw-bolder mt-3">
              {" "}
              <Typewriter
                options={{
                  strings: [
                    "I'm a Frontend Web Developer",
                    "I develop modern responsive websites and webApps.",
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

        <section style={{ height: "80vh" }} ref={myRef} id="2">
          <Section1 />
        </section>
      </div>
    </>
  );
};

export default Home;
