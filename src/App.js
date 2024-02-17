import Home from "./components/Home/Home";
import SubjectPage from "./components/Subjects/SubjectPage";
import Path from "./components/Subjects/path";
import NavBar from "./components/navbar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subject/:name" element={<SubjectPage />} />

        <Route path="/tutor/" element={<h1>TeacherPage</h1>} />
        <Route path="/public/:path" element={<Path/>} />
        <Route path="/*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
};

export default App;
