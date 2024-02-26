import Home from "./components/Home/Home";
import SubjectPage from "./components/Subjects/SubjectPage";
import TutorPage from "./components/Tutors/TutorPage";
import NavBar from "./components/navbar/NavBar";
import {Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subject/:name" element={<SubjectPage />} />
        <Route path="/tutors/:name" element={<TutorPage />} />
        <Route path="/*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
};

export default App;
