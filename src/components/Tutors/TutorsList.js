import Tutor from "./Tutor";
import tutorsData from "./tutorsData";

const TutorsList = () => {
  const tutorsArray = tutorsData.map((tutor, i) => {
    return (
      <Tutor
        key={tutorsData[i].id}
        name={tutorsData[i].name}
        abbrv={tutorsData[i].abbrv}
        image={tutorsData[i].image}
        subject={tutorsData[i].subjects[0]}
      />
    );
  });

  return <div className="tutors-list">{tutorsArray}</div>;
};

export default TutorsList;
