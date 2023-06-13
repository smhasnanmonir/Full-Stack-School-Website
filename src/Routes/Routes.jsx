import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home/Home";
import Classes from "../Pages/Classes/Classes";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import CourseInstructors from "../Pages/CourseInstructors/CourseInstructors";
import Dashboard from "../Pages/Dashboard/Dashboard";
import CourseCart from "../Pages/CourseCart/CourseCart";

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
    ],
  },
]);

export default router;
