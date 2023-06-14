import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home/Home";
import Classes from "../Pages/Classes/Classes";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import CourseInstructors from "../Pages/CourseInstructors/CourseInstructors";
import Dashboard from "../Pages/Dashboard/Dashboard";
import CourseCart from "../Pages/CourseCart/CourseCart";
import ManageClasses from "../Pages/AdminComponents/ManageClasses";
import ManageUser from "../Pages/AdminComponents/ManageUser";
import AddClass from "../Pages/InstructorPage/AddClass";
import MyClass from "../Pages/InstructorPage/MyClass";
import EnrolledHistory from "../Pages/StudentComponents/PaymentHistory.jsx/EnreolledHistory";
import UpdateMyClass from "../Pages/InstructorPage/UpdateMyClass";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/class",
        element: <Classes></Classes>,
      },
      {
        path: "/instructors",
        element: <CourseInstructors></CourseInstructors>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "cart",
        element: <CourseCart></CourseCart>,
      },
      {
        path: "enrolled",
        element: <EnrolledHistory></EnrolledHistory>,
      },
      {
        path: "manageClasses",
        element: <ManageClasses></ManageClasses>,
      },
      {
        path: "manageUser",
        element: <ManageUser></ManageUser>,
      },
      {
        path: "addCourse",
        element: <AddClass></AddClass>,
      },
      {
        path: "myClass",
        element: <MyClass></MyClass>,
      },
      {
        path: "myClass/updateClass/:id",
        element: <UpdateMyClass></UpdateMyClass>,
      },
    ],
  },
]);

export default router;
