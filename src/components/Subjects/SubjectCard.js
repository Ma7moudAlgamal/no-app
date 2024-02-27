import { Link } from "react-router-dom";
import "./SubjectCard.css";

const SubjectCard = ({ name, icon }) => {
  return (
    <Link to={`/subject/${name}`}>
      <div className="card subject hover">
        <h3 className="subject-name">{name}</h3>
        <div className="subject-icon">{icon}</div>
      </div>
    </Link>
  );
};

export default SubjectCard;
