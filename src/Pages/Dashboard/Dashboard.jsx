import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useUser from "../../hooks/useUser";
import {
  BsBagPlusFill,
  BsFillBookFill,
  BsFillHouseHeartFill,
  BsFillMortarboardFill,
  BsFillPersonPlusFill,
  BsPlusCircleFill,
} from "react-icons/bs";

const Dashboard = () => {
  const [cart] = useCart();

  const [userRole] = useUser();

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#e3006a] text-white">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80">
          {userRole[0]?.role == "admin" ? (
            <>
              <div className="space-y-5">
                <li className="text-2xl font-bold">
                  <NavLink to="/dashboard/manageClasses">
                    <BsFillBookFill></BsFillBookFill> Manage Classes
                  </NavLink>
                </li>
                <li className="text-2xl font-bold">
                  <NavLink to="/dashboard/manageUser">
                    <BsFillPersonPlusFill></BsFillPersonPlusFill> Manage Users
                  </NavLink>
                </li>
              </div>
            </>
          ) : userRole[0]?.role == "instructor" ? (
            <>
              <div className="space-y-5">
                <li className="text-2xl font-bold">
                  <NavLink to="/dashboard/addCourse">
                    <BsPlusCircleFill></BsPlusCircleFill> Add a course
                  </NavLink>
                </li>
                <li className="text-2xl font-bold">
                  <NavLink to="/dashboard/myClass">
                    {" "}
                    <BsFillMortarboardFill></BsFillMortarboardFill> My Classes
                  </NavLink>
                </li>
              </div>
            </>
          ) : (
            <>
              <li className="text-2xl font-bold">
                <NavLink to="/dashboard/enrolled">
                  {" "}
                  <BsFillMortarboardFill></BsFillMortarboardFill> Enrolled
                  Classes
                </NavLink>
              </li>
              <li className="text-2xl font-bold">
                <NavLink to="/dashboard/cart">
                  <BsBagPlusFill></BsBagPlusFill> Selected Classes
                  <span className="badge inl badge-secondary">
                    +{cart?.length || 0}
                  </span>
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li className="text-2xl font-bold">
            <NavLink to="/">
              <BsFillHouseHeartFill></BsFillHouseHeartFill> Home
            </NavLink>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
