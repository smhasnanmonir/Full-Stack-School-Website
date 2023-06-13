import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../hooks/useCart";
// import useCart from "../../hooks/useCart";
// import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  // TODO: load data from the server to have dynamic isAdmin based on Data
  const isAdmin = true;
  // const [isAdmin] = useAdmin();

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
          {isAdmin ? (
            <>
              <div className="space-y-5">
                <li className="text-2xl font-bold">
                  <NavLink to="/dashboard/adminHome">Admin Home</NavLink>
                </li>
                <li className="text-2xl font-bold">
                  <NavLink to="/dashboard/"> Add Courses</NavLink>
                </li>
                <li className="text-2xl font-bold">
                  <NavLink to="/dashboard/">Manage course</NavLink>
                </li>
                <li className="text-2xl font-bold">
                  <NavLink to="/dashboard/">All Users</NavLink>
                </li>
              </div>
            </>
          ) : (
            <>
              <li className="text-2xl font-bold">
                <NavLink to="/dashboard/home">User Home</NavLink>
              </li>
              <li className="text-2xl font-bold">
                <NavLink to="/dashboard/history">Payment History</NavLink>
              </li>
              <li className="text-2xl font-bold">
                <NavLink to="/dashboard/cart">
                  My Cart
                  <span className="badge inl badge-secondary">
                    +{cart?.length || 0}
                  </span>
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li className="text-2xl font-bold">
            <NavLink to="/">Home</NavLink>{" "}
          </li>
          <li className="text-2xl font-bold">
            <NavLink to="/class">Add more course</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
