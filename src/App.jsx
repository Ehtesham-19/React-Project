import CreateAssignment from "./Pages/CreateAssignment";
import MyAssignment from "./Pages/MyAssignment";
import AddStudentForm from "./Pages/NewStudent";
import NewTeacher from "./Pages/NewTeacher";
import Notification from "./Pages/Notification";
import StudentTable from "./Pages/Students";
import TeacherDetails from "./Pages/TeacherDetails";
import Teachers from "./Pages/Teachers";
import AssignmentDetails from "./Pages/AssignmentDetails";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <div>
      <Notification />
      <TeacherDetails />
      <Teachers />
      <NewTeacher />
      <StudentTable />
      <AddStudentForm />
      <MyAssignment />
      <CreateAssignment />
        <Routes>
          <Route path="/assignments" element={<MyAssignment />} />
          <Route path="/assignments/:id" element={<AssignmentDetails />} />
        </Routes>
    </div>
  );
}

export default App;
