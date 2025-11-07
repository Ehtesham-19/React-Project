import Notification from "./Pages/Notification And Layout/Notification";
import TeacherDetails from "./Pages/TeachersDetails/TeacherDetails";
import Teachers from "./Pages/All Teacher/Teachers";
import NewTeacher from "./Pages/Add New Teacher/NewTeacher";
import Sidebar from "./Pages/SideBar/SideBar";
import "./index.css";

function App() {
  return (
    <div>
      <Notification />
      <TeacherDetails />
      <Teachers />
      <NewTeacher />
      <Sidebar />
    </div>
  );
}

export default App;
