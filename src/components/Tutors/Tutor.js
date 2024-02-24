import { Link } from "react-router-dom";

const Tutor = ({name, abbrv, subject, image }) => {
  return (
    <Link to={`/tutors/${name}`}>
      <div className="tutor hover">
        <img src={image} alt={name} />
        <h3>{abbrv}</h3>
        <p>{subject}</p>
      </div>
    </Link>
  );
};

export default Tutor;
