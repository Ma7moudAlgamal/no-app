import { Link, useParams } from "react-router-dom";
import tutorsData from "./tutorsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./tutorPage.css";

const TutorPage = () => {
  const { name } = useParams();

  const updatedName = name.toString().replace("%20", " ");

  const tutorData = tutorsData.find((tutor) => tutor.name === updatedName);

  const subjects = tutorData.subjects.map((subject, i) => {
    return (
      <Link to={`/subject/${tutorData.subjects[i]}`}>
        <h5>{tutorData.subjects[i]}</h5>
      </Link>
    );
  });

  if (tutorData) {
    return (
      <div className="tutorPage">
        <main className="wrapper">
          <img src={tutorData.image} alt={tutorData.name} />
          <h1 className="section-title">{tutorData.name}</h1>
          <p className="tutor-description">{tutorData.description}</p>
          <p className="tutor-subjects">
            <div>{subjects}</div> {tutorData.rating}
          </p>
        </main>

        <section className="tutor-contact wrapper">
          <h2>
            Contact
            <br />
            {tutorData.name}
          </h2>
          <div className="contact-info hover card">
            <a
              href={`https://api.whatsapp.com/send/?phone=${tutorData.contact.phone}`}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faPhone} />
              <p>+{tutorData.contact.phone}</p>
            </a>
          </div>
          <div className="contact-info hover card">
            <a
              href={`mailto:${tutorData.contact.email}`}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <p>{tutorData.contact.email}</p>
            </a>
          </div>
        </section>
      </div>
    );
  } else {
    <h1>404</h1>;
  }
};

export default TutorPage;
