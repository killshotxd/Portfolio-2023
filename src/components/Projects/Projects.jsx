import React from "react";
import styles from "../Home/Home.module.css";
import { RoughNotation } from "react-rough-notation";
const Projects = () => {
  return (
    <>
      <div className={styles.parallax}>
        <div id={styles.stars1}></div>
        <div id={styles.stars2}></div>
        <div id={styles.stars3}></div>

        <section>
          <div className="container">
            <div className="row">
              <h2 className="fw-bold text-center mt-4">
                <RoughNotation type="underline" show={true}>
                  Projects
                </RoughNotation>
              </h2>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row mt-4 ">
              <div className="col justify-content-center d-flex flex-wrap gap-4">
                {/* PROJECT CONTAINER */}
                <div className={styles.button55}>
                  <div className="heading row mt-2 mb-2 ml-2">
                    <h2 className="text-center fw-bold">
                      World Chat App (ReactJs)
                    </h2>

                    <div className=" col" style={{ maxWidth: "fit-content" }}>
                      <img
                        style={{ width: "35rem", minWidth: "20rem" }}
                        className="img-fluid"
                        src="https://github.com/killshotxd/Portfolio-2023/blob/main/src/assets/WorldChat.png?raw=true"
                        alt=""
                      />
                    </div>
                    <div className="description col justify-content-center d-flex flex-column">
                      <p className="fs-5 ">
                        Designed and developed WorldChat chat app with Reactjs,
                        Firebase, TailwindCss, and DaisyUI, utilizing ViteJS for
                        optimized development. Implemented key features,
                        including read receipts, private rooms, and world chat,
                        to deliver a seamless and efficient user experience.
                      </p>
                      <div className="links d-flex gap-3">
                        <a
                          href="https://chitchat-c83aa.web.app/"
                          target="_blank"
                          className={styles.button55}
                        >
                          Live Link
                        </a>
                        <a
                          href="https://github.com/killshotxd/WorldChat"
                          target="_blank"
                          className={styles.button55}
                        >
                          Source Link
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* PROJECT CONTAINER */}

                {/* PROJECT CONTAINER */}
                <div className={styles.button55}>
                  <div className="heading row mt-2 mb-2 ml-2">
                    <h2 className="text-center fw-bold">
                      Project Manager (ReactJs)
                    </h2>

                    <div className=" col" style={{ maxWidth: "fit-content" }}>
                      <img
                        style={{ width: "35rem", minWidth: "20rem" }}
                        className="img-fluid"
                        src="https://github.com/killshotxd/Portfolio-2023/blob/main/src/assets/Projects%20Manager.png?raw=true"
                        alt=""
                      />
                    </div>
                    <div className="description col justify-content-center d-flex flex-column">
                      <p className="fs-5 ">
                        The Project Manager app is a modern full stack web app
                        that uses Firebase APIs for secure data storage and
                        retrieval, login, and project sharing. Its responsive
                        design and intuitive interface make it highly accessible
                        for users to showcase their projects on any device
                      </p>
                      <div className="links d-flex gap-3">
                        <a
                          href="https://projectfairauth.web.app/"
                          target="_blank"
                          className={styles.button55}
                        >
                          Live Link
                        </a>
                        <a
                          href="https://github.com/killshotxd/Project-Manager"
                          target="_blank"
                          className={styles.button55}
                        >
                          Source Link
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* PROJECT CONTAINER */}

                {/* PROJECT CONTAINER */}
                <div className={styles.button55}>
                  <div className="heading row mt-2 mb-2 ml-2">
                    <h2 className="text-center fw-bold">
                      Video Blaze (ReactJs)
                    </h2>

                    <div className=" col" style={{ maxWidth: "fit-content" }}>
                      <img
                        style={{ width: "35rem", minWidth: "20rem" }}
                        className="img-fluid"
                        src="https://github.com/killshotxd/Portfolio-2023/blob/main/src/assets/Video%20Blaze.png?raw=true"
                        alt=""
                      />
                    </div>
                    <div className="description col justify-content-center d-flex flex-column">
                      <p className="fs-5">
                        Video Blaze is a Social Video sharing app where user can
                        create their profile and share their videos worldwide.
                        React app initialized using Vite uses Firebase v9 as
                        Backend and is fully responsive with Firebase Storage
                        for storing videos, Firebase Database , Firebase
                        Authentication and Firebase Hosting.
                      </p>
                      <div className="links d-flex gap-3">
                        <a
                          href="https://fir-auth-b1867.web.app/"
                          target="_blank"
                          className={styles.button55}
                        >
                          Live Link
                        </a>
                        <a
                          href="https://github.com/killshotxd/Video-Blaze"
                          target="_blank"
                          className={styles.button55}
                        >
                          Source Link
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* PROJECT CONTAINER */}

                {/* PROJECT CONTAINER */}
                <div className={styles.button55}>
                  <div className="heading row mt-2 mb-2 ml-2">
                    <h2 className="text-center fw-bold">
                      WhatsOnMind (Nextjs)
                    </h2>

                    <div className=" col" style={{ maxWidth: "fit-content" }}>
                      <img
                        style={{ width: "35rem", minWidth: "20rem" }}
                        className="img-fluid"
                        src="https://github.com/killshotxd/Portfolio-2023/blob/main/src/assets/WhatsOnMind.png?raw=true"
                        alt=""
                      />
                    </div>
                    <div className="description col justify-content-center d-flex flex-column">
                      <p className="fs-5">
                        What is on your mind is a NextJs thought sharer web app
                        where user can Signup using Firebase Google Auth and
                        make posts where anyone can read and comment on posts
                        also.This web App uses Firebase as backend for all data
                        storage and Authentication
                      </p>
                      <div className="links d-flex gap-3">
                        <a
                          href="http://whatsonmind.vercel.app/"
                          target="_blank"
                          className={styles.button55}
                        >
                          Live Link
                        </a>
                        <a
                          href="https://github.com/killshotxd/whatsonmind"
                          target="_blank"
                          className={styles.button55}
                        >
                          Source Link
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* PROJECT CONTAINER */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects;
