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
    </div>
  );
}

export default App;
