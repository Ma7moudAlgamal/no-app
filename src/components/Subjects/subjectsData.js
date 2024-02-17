import {
  faAtom,
  faCalculator,
  faDna,
  faE,
  faFlask,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SubjectDescription from "./SubjectDescription";
import SampleLesson from "./SampleLesson";
import Resource from "./Resource";

const SubjectsData = [
  {
    id: 1,
    name: "Physics",
    icon: <FontAwesomeIcon icon={faAtom} />,
    description:
      "Physics: It's the study of matter, energy, and their interactions. This fundamental science underlies everything from the motion of falling objects to the structure of atoms and the formation of galaxies. While formulas are part of the equation, there's also experimentation, problem-solving, and even a sense of wonder as we explore the universe's mysteries. Interested in digging deeper?",
    image: "ImageLink",
    "sample-lessons": [
      <SampleLesson
        title={"Formulas"}
        link={"https://www.youtube.com/embed/42iQKuQodW4"}
      />,
      <SampleLesson
        title={"Idk"}
        link={"https://www.youtube.com/embed/42iQKuQodW4"}
      />,
      <SampleLesson
        title={"Nah man"}
        link={"https://www.youtube.com/embed/42iQKuQodW4"}
      />,
    ],
    resources: [
      <Resource
        title={"Formulas"}
        image={"../../../public/Resources/Physics/formulas/image.png"}
        location={
          "../../"
        }
      />,
      <Resource
        title={"Acceleration"}
        image={"../../../public/Resources/Physics/formulas/image.png"}
        location={
          "../public/Resources/Physics/formulas/Section_2.1_-Why_be_an_Entrepreneur-LESSON_questions_(answers).pdf"
        }
      />,
      <Resource
        title={"Graphs"}
        image={"../../../public/Resources/Physics/formulas/image.png"}
        location={
          "../public/Resources/Physics/formulas/Section_2.1_-Why_be_an_Entrepreneur-LESSON_questions_(answers).pdf"
        }
      />,
    ],
    tutors: [
      {
        name: "Mark Vector",
        "name-abrv": "Mark V.",
        pfp: "imageLink",
      },
    ],
  },

  {
    id: 2,
    name: "Chemistry",
    icon: <FontAwesomeIcon icon={faFlask} />,
    description: "first line \n second line",
    image: "ImageLink",
    "sample-lessons": [],
    resources: [],
    tutors: [
      {
        name: "Mr. Mostafa Tarek",
        "name-abrv": "Mostafa T.",
        pfp: "imageLink",
      },
    ],
  },

  {
    id: 3,
    name: "Arabic",
    icon: <FontAwesomeIcon icon={faLanguage} />,
    description: "first line \n second line",
    image: "ImageLink",
    "sample-lessons": [],
    resources: [],
    tutors: [
      {
        name: "Mr. Mostafa Tarek",
        "name-abrv": "Mostafa T.",
        pfp: "imageLink",
      },
    ],
  },
  {
    id: 4,
    name: "Biology",
    icon: <FontAwesomeIcon icon={faDna} />,
    description: "first line \n second line",
    image: "ImageLink",
    "sample-lessons": [],
    resources: [],
    tutors: [
      {
        name: "Mr. Mostafa Tarek",
        "name-abrv": "Mostafa T.",
        pfp: "imageLink",
      },
    ],
  },
  {
    id: 5,
    name: "English",
    icon: <FontAwesomeIcon icon={faE} />,
    description: "first line \n second line",
    image: "ImageLink",
    "sample-lessons": [],
    resources: [],
    tutors: [
      {
        name: "Mr. Mostafa Tarek",
        "name-abrv": "Mostafa T.",
        pfp: "imageLink",
      },
    ],
  },
  {
    id: 6,
    name: "Maths",
    icon: <FontAwesomeIcon icon={faCalculator} />,
    description: "",
    image: "ImageLink",
    "sample-lessons": [],
    resources: [],
    tutors: [
      {
        name: "Mr. Mostafa Tarek",
        "name-abrv": "Mostafa T.",
        pfp: "imageLink",
      },
    ],
  },
];

export default SubjectsData;
