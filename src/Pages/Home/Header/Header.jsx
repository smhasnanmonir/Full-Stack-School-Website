import { Link } from "react-router-dom";

const Header = () => {
  const CommonNavbar = (
    <>
      <div className="flex gap-[40px] items-center align-middle justify-center">
        <Link className="text-xl font-bold hover:text-red-600" to="/">
          Home
        </Link>
        <Link className="text-xl font-bold hover:text-red-600" to="/class">
          Book A Class
        </Link>
        <Link
          className="text-xl font-bold hover:text-red-600"
          to="/order/salad"
        >
          Order
        </Link>
        <Link
          className="text-xl font-bold hover:text-red-600"
          to="/dashboard/mycart"
        >
          <button className="btn">
            Button
            {/* <div className="badge badge-secondary">{cart?.length || 0}</div> */}
          </button>
        </Link>
      </div>

      {/* {user ? (
        <>
          <button onClick={handleLogOut} className="btn btn-ghost">
            Log Out
          </button>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Log In</Link>
          </li>
        </>
      )} */}
    </>
  );
  return (
    <div className="navbar z-10 fixed bg-blue-900 bg-opacity-20 backdrop-blur-[25px] text-white">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {CommonNavbar}
          </ul>
        </div>
        <div className="flex gap-2">
          <a className="btn btn-ghost normal-case text-xl">Film School</a>
          <img
            className="w-[128px]"
            src="https://i.ibb.co/6XkBBXq/Group-1logo.png"
            alt=""
          />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{CommonNavbar}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Header;
