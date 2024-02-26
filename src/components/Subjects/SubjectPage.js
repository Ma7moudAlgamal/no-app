import { useParams } from "react-router-dom";
import SubjectsData from "./subjectsData";
import "./SubjectPage.css";

const SubjectPage = () => {
  const { name } = useParams();

  //   const subjectData = SubjectsData.find((map) => map.name === name)

  const subject = SubjectsData.find((subject) => subject.name === name);


  if (subject) {
    return (
      <>
        <main className="wrapper">
          <div className="grid">
            <h1 className="section-title">{subject.name}</h1>
            <p>{subject.description}</p>
            <div className="icon">{subject.icon}</div>
          </div>
        </main>

        <section className="wrapper">
          <h1 className="section-title">Sample Lessons</h1>
          <div className="sample-lessons">{subject["sample-lessons"]}</div>
        </section>

        {/* <section className="wrapper">
          <h1 className="section-title">Sample Resources</h1>
          <div className="resources">
            {subject["resources"]}
          </div>
        </section> */}
      </>
    );
  } else {
    return <h1>404</h1>;
  }
};

export default SubjectPage;
