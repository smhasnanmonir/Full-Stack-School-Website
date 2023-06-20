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
import FeedBackClass from "../Pages/AdminComponents/FeedBackClass";
import PrivateRoutes from "./PrivateRoutes";
import AdminRoutes from "./AdminRoutes";
import InstructorRoutes from "./InstructorRoutes";
import Payment from "../Pages/Dashboard/Payment";
import ErrorPage from "../Pages/ErrorPage";

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
      {
        path: "/*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "cart",
        element: (
          <PrivateRoutes>
            <CourseCart></CourseCart>
          </PrivateRoutes>
        ),
      },
      {
        path: "cart/payment",
        element: (
          <PrivateRoutes>
            <Payment></Payment>
          </PrivateRoutes>
        ),
      },
      {
        path: "enrolled",
        element: (
          <PrivateRoutes>
            <EnrolledHistory></EnrolledHistory>
          </PrivateRoutes>
        ),
      },
      {
        path: "manageClasses",
        element: (
          <AdminRoutes>
            <ManageClasses></ManageClasses>
          </AdminRoutes>
        ),
      },
      {
        path: "manageClasses/feedbackClass/:id",
        element: (
          <AdminRoutes>
            <FeedBackClass></FeedBackClass>
          </AdminRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://school-server-1w5r.onrender.com/classes/${params.id}`),
      },
      {
        path: "manageUser",
        element: (
          <AdminRoutes>
            <ManageUser></ManageUser>
          </AdminRoutes>
        ),
      },
      {
        path: "addCourse",
        element: (
          <InstructorRoutes>
            <AddClass></AddClass>
          </InstructorRoutes>
        ),
      },
      {
        path: "myClass",
        element: (
          <InstructorRoutes>
            <MyClass></MyClass>
          </InstructorRoutes>
        ),
      },
      {
        path: "myClass/updateClass/:id",
        element: (
          <InstructorRoutes>
            <UpdateMyClass></UpdateMyClass>
          </InstructorRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://school-server-1w5r.onrender.com/classes/email${params.id}`
          ),
      },
    ],
  },
]);

export default router;
