import AddStudentForm from "./Pages/NewStudent";
import NewTeacher from "./Pages/NewTeacher";
import Notification from "./Pages/Notification";
import Sidebar from "./Pages/SideBar";
import TeacherDetails from "./Pages/TeacherDetails";
import Teachers from "./Pages/Teachers";

function App() {
  return (
    <div>
      <Teachers />
      <TeacherDetails />
      <NewTeacher />
      <Notification />
      <Sidebar />
      <AddStudentForm/>
    </div>
  );
}

export default App;
