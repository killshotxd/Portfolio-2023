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
              <div className="col justify-content-center d-flex">
                <div className={styles.button55}>Project 1</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects;
