import CheckMark from "../CheckMark";
import './Reason.css'

const Reason = ({ title, txt }) => {
  return (
    <div className="card grid reason hover">
      <div className="svg">
        <CheckMark />
      </div>
      <div className="card-title">{title}</div>
      <div className="card-txt">{txt}</div>
    </div>
  );
};

export default Reason;
