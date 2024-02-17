import SubjectCard from "./SubjectCard";
import SubjectsData from "./subjectsData";

const SubjectsList = () => {
  const subjectsArray = SubjectsData.map((subject, i) => {
    return (
      <SubjectCard
        key={SubjectsData[i].id}
        name={SubjectsData[i].name}
        icon={SubjectsData[i].icon}
      />
    );
  });

  return <div className="grid">{subjectsArray}</div>;
};

export default SubjectsList;
