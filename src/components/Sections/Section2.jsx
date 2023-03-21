import React from "react";
import styles from "./Section.module.css";
import { RoughNotation } from "react-rough-notation";
import { useEffect } from "react";
import Lottie from "react-lottie";
import dev from "../../assets/133580-rocket.json";
import star from "../../assets/133640-star-shape-lottie-animation.json";
const Section2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: dev,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: star,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section style={{ marginTop: "3rem", marginBottom: "5rem" }}>
      <div className={styles.parallax}>
        <div id={styles.stars1}></div>
        <div id={styles.stars2}></div>
        <div id={styles.stars3}></div>

        <div className="container">
          <div className="row">
            <div className="d-flex justify-content-center align-items-center">
              <h2 className=" fw-bold">
                <RoughNotation type="underline" show={true}>
                  My Experience
                </RoughNotation>
              </h2>
              <Lottie
                options={defaultOptions}
                height={100}
                width={100}
                style={{ margin: 0 }}
              />
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div
              style={{ borderLeft: "2px solid #000" }}
              className="  d-flex flex-column justify-content-center align-items-start"
            >
              <div
                style={{ marginLeft: "3rem" }}
                className="row fs-4 ml0res  fw-bold"
              >
                <div className="d-flex justify-content-center align-items-center">
                  <Lottie
                    options={defaultOptions2}
                    height={70}
                    width={70}
                    style={{ margin: 0 }}
                  />
                  <RoughNotation type="underline" show={true}>
                    HTML, CSS and Js :
                  </RoughNotation>
                </div>
              </div>

              <div style={{ marginLeft: "3rem" }}>
                <li className="m-0 p-0 mt-4 fs-5">
                  I am a web developer with 2+ years of experience in HTML, CSS,
                  and JavaScript. I have a strong understanding of web
                  development basics and the ability to create functional and
                  visually appealing websites. I have experience in creating
                  projects for a personal portfolio, which demonstrate my
                  ability to design and develop websites using these
                  technologies.
                </li>

                <li className="m-0 p-0 mt-4 fs-5">
                  I have experience in creating responsive and mobile-friendly
                  websites, and I have a good understanding of web design
                  principles. I have a solid understanding of HTML5, CSS3, and
                  JavaScript and have a good experience working with jQuery and
                  other JavaScript libraries.
                </li>

                <li className="m-0 p-0 mt-4 fs-5">
                  I am passionate about creating user-friendly websites and have
                  experience in creating websites that are accessible to all
                  users. I am always keen to learn new technologies and
                  methodologies to stay up to date with the latest web
                  development trends.
                </li>

                <li className="m-0 p-0 mt-4 fs-5">
                  I have the ability to work independently and in a team, and I
                  am a quick learner and problem-solver. I am excited to
                  continue to grow my skills and experience as a web developer
                  and looking forward to work on challenging projects.
                </li>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div
              style={{ borderLeft: "2px solid #000" }}
              className="  d-flex flex-column justify-content-center align-items-start"
            >
              <div
                style={{ marginLeft: "3rem" }}
                className="row fs-4 ml0res  fw-bold"
              >
                <div className="d-flex justify-content-center align-items-center">
                  <Lottie
                    options={defaultOptions2}
                    height={70}
                    width={70}
                    style={{ margin: 0 }}
                  />
                  <RoughNotation type="underline" show={true}>
                    ReactJs, NextJs, AngularJs, FireBase :
                  </RoughNotation>
                </div>
              </div>

              <div style={{ marginLeft: "3rem" }}>
                <li className="m-0 p-0 mt-4 fs-5">
                  I am a web developer with 1 year of experience in ReactJS,
                  NextJS, Angular, and Firebase. I have a solid understanding of
                  how to use these technologies to create dynamic and
                  interactive web applications.
                </li>

                <li className="m-0 p-0 mt-4 fs-5">
                  I have experience in building and maintaining complex
                  applications using ReactJS, where I have a good understanding
                  of the concepts of components, state, and props. I also have
                  experience in optimizing the performance and SEO of React
                  applications using NextJS.
                </li>

                <li className="m-0 p-0 mt-4 fs-5">
                  I have a good understanding of Angular concepts such as
                  components, directives, and services, and have experience in
                  building and maintaining complex applications using Angular.
                </li>

                <li className="m-0 p-0 mt-4 fs-5">
                  I have experience in integrating Firebase into my web
                  applications to add backend functionality such as
                  authentication, real-time database, and storage.
                </li>

                <li className="m-0 p-0 mt-4 fs-5">
                  I am familiar with development workflows, best practices, and
                  am always keen to learn new technologies and methodologies to
                  stay up to date with the latest web development trends. I am a
                  quick learner and problem-solver. I am excited to continue to
                  grow my skills and experience as a web developer and looking
                  forward to work on challenging projects.
                </li>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div
              style={{ borderLeft: "2px solid #000" }}
              className="  d-flex flex-column justify-content-center align-items-start"
            >
              <div
                style={{ marginLeft: "3rem" }}
                className="row fs-4 ml0res  fw-bold"
              >
                <div className="d-flex justify-content-center align-items-center">
                  <Lottie
                    options={defaultOptions2}
                    height={70}
                    width={70}
                    style={{ margin: 0 }}
                  />
                  <RoughNotation type="underline" show={true}>
                    Work Experience :
                  </RoughNotation>
                </div>
              </div>
              {/* 1 */}
              <div>
                <div
                  style={{ marginLeft: "3rem", marginTop: "3rem" }}
                  className="row fs-5 ml0res  fw-bold"
                >
                  <RoughNotation type="highlight" show={true}>
                    <span className="text-white">
                      1. DESTEK INFOSOLUTION "(INTERNSHIP 6 Months)"
                    </span>
                  </RoughNotation>
                </div>

                <div style={{ marginLeft: "3rem" }}>
                  <li className="m-0 p-0 mt-4 fs-5">
                    I worked as a web developer at{" "}
                    <strong>Destek Infosolution</strong> for 6 months. During
                    this time, I developed the full frontend UI of the POPC
                    comic web app, which is responsive, as well as the frontend
                    UI of the Wayu web food delivery app. I also collaborated
                    with my team to develop the Exam management UI. I utilized
                    HTML, CSS, JS, and Angular technology in my work at this
                    company.
                  </li>

                  <li className="m-0 p-0 mt-4 fs-5">
                    During my time at <strong>Destek Infosolution</strong> , I
                    gained valuable experience in web development and honed my
                    skills in HTML, CSS, JS, and Angular technology. I also had
                    the opportunity to work on various projects, such as the
                    POPC comic web app and the Wayu web food delivery app, which
                    allowed me to improve my frontend development skills.
                    Additionally, I collaborated with my team to develop the
                    Exam management UI, which helped me to improve my teamwork
                    and problem-solving abilities. Overall, the 6 months I spent
                    at Destek Infosolution were a valuable learning experience
                    for me, and I was able to improve myself both technically
                    and professionally.
                  </li>

                  <li className="m-0 p-0 mt-4 fs-5">
                    During my time at Destek Infosolution, I also had the
                    opportunity to work with two junior web developers. I was
                    responsible for guiding and mentoring them as they learned
                    and developed their skills. I provided them with
                    constructive feedback on their work and helped them to
                    troubleshoot any issues they encountered. I also shared my
                    knowledge and experience with them and provided them with
                    guidance on best practices and industry standards. By
                    working closely with them, I was able to help them improve
                    their skills and confidence, and I also learned from their
                    fresh perspective and new ideas. I believe that this
                    experience helped me to improve my leadership and mentoring
                    skills.
                  </li>
                </div>
              </div>
              {/* 1 */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
