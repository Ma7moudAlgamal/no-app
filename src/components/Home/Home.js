import SubjectsList from "../Subjects/SubjectsList";
import TutorsList from "../Tutors/TutorsList";
import Reason from "./Reason Card/Reason";
import "./css/about.css";
import "./css/hero.css";
import "./css/reasons.css";
import "./css/subjectsList.css";
import "./css/tutorsList.css";
import {  Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main>
        <div className="wrapper">
          <div className="grid">
            <h1>
              Unleash Your Potential: <br />
              <span>Acquire</span> Mastery in Any Subject.
            </h1>

            <img
              src="https://placehold.co/500"
              alt="placeholder"
              className="hero-img"
            />

            <div className="cta">
              <Link to="/subject">Explore Subjects</Link>
            </div>
          </div>
        </div>
      </main>

      <section id="about" className="about wrapper">
        <h2 className="section-title">About Us</h2>
        <div className="grid">
          <p>
            Acquire is more than just a tutoring platform - it's a community
            dedicated to empowering individuals of all ages and backgrounds to
            unlock their full potential. We believe everyone has the ability to
            learn and thrive, and we're here to provide the personalized support
            and guidance you need to achieve your academic goals.
          </p>
          <div className="card" id="passion">
            <h2 className="card-title">Our Passion</h2>
            <p className="card-txt">
              Our team of experienced and passionate educators is dedicated to
              making learning engaging, effective, and accessible. We understand
              that every learner is unique, and we tailor our approach to meet
              your individual needs and learning styles.
            </p>
          </div>
          <div className="card" id="values">
            <h2 className="card-title">Our Values</h2>
            <p className="card-txt">
              We are committed to providing a positive and supportive learning
              environment where you feel empowered to ask questions, take risks,
              and celebrate your successes. We believe in building strong
              relationships with our students and fostering a sense of community
              and belonging.
            </p>
          </div>
        </div>
      </section>

      <section className="wrapper reasons">
        <h2 className="section-title">Why Choose Acquire</h2>
        <div className="grid">
          <Reason
            title={"Wide range of subjects"}
            txt={
              "We offer a diverse selection of subjects to cater to your specific needs and interests."
            }
          />
          <Reason
            title={"Expert tutors"}
            txt={
              "Our team of qualified and experienced teachers is passionate about making learning fun and effective."
            }
          />
          <Reason
            title={"Personalized learning"}
            txt={
              "We tailor our approach to your individual needs and learning style."
            }
          />
          <Reason
            title={"Flexible schedule"}
            txt={
              "We offer flexible scheduling options to fit your busy lifestyle."
            }
          />
        </div>
      </section>

      <section id="subjects" className="subjects wrapper">
        <h2 className="section-title">Subjects</h2>

        <SubjectsList />
      </section>

      <section id="tutors" className="tutors wrapper">
        <h2 className="section-title">Tutors</h2>

        <TutorsList />
      </section>
    </>
  );
};

export default Home;
