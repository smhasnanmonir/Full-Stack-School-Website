import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useUser from "../../../hooks/useUser";
import { useEffect, useState } from "react";

const Header = () => {
  const { user, signOutFromWeb } = useAuth();

  const handleLogOut = () => {
    signOutFromWeb()
      .then(() => {})
      .catch((error) => {
        Swal.fire({ error });
      });
  };

  const [theme, setTheme] = useState("light");
  console.log(theme);

  const handleTheme = () => {
    if (theme == "light") {
      document.querySelector("html").setAttribute("data-theme", "dark");
      setTheme("dark");
      localStorage.setItem("theme");
    } else {
      document.querySelector("html").setAttribute("data-theme", "light");
      setTheme("light");
    }
  };

  const [cart] = useCart();
  const [userRole] = useUser();
  const CommonNavbar = (
    <>
      <div className="flex gap-[15px] items-center align-middle justify-center">
        <Link className="text-xl font-bold hover:text-red-600" to="/">
          Home
        </Link>
        <Link className="text-xl font-bold hover:text-red-600" to="/class">
          Classes
        </Link>
        <Link
          className="text-xl font-bold hover:text-red-600"
          to="/instructors"
        >
          Instructors
        </Link>
        {userRole[0]?.role == "admin" ? (
          <Link
            className="text-xl font-bold hover:text-red-600"
            to="/dashboard/manageClasses"
          >
            Dashboard
            <div className="badge badge-lg">{cart?.length || 0}</div>
          </Link>
        ) : userRole[0]?.role == "instructor" ? (
          <Link
            className="text-xl font-bold hover:text-red-600"
            to="/dashboard/myClass"
          >
            Dashboard
            <div className="badge badge-lg">{cart?.length || 0}</div>
          </Link>
        ) : (
          <Link
            className="text-xl font-bold hover:text-red-600"
            to="/dashboard/cart"
          >
            Dashboard
            <div className="badge badge-lg">{cart?.length || 0}</div>
          </Link>
        )}
        {user ? (
          <>
            <button onClick={handleLogOut} className="btn">
              Log Out
            </button>
          </>
        ) : (
          <>
            <li>
              <Link className="btn" to="/login">
                Log In
              </Link>
            </li>
          </>
        )}
      </div>
    </>
  );
  return (
    <div className="navbar bg-blue-900 bg-opacity-70 backdrop-blur-[25px] text-white md:grid md:place-items-center">
      <div className="navbar-start md:w-[350px]">
        <div className="flex gap-[25px]">
          <a className="btn btn-ghost normal-case text-xl">Film School</a>
          <img
            className="w-[128px] hidden md:block"
            src="https://i.ibb.co/6XkBBXq/Group-1logo.png"
            alt=""
          />

          <div className="lg:hidden">
            {userRole[0]?.role == "admin" ? (
              <Link
                className="text-xl font-bold hover:text-red-600"
                to="/dashboard/manageClasses"
              >
                Dashboard
                <div className="badge badge-lg">{cart?.length || 0}</div>
              </Link>
            ) : userRole[0]?.role == "instructor" ? (
              <Link
                className="text-xl font-bold hover:text-red-600"
                to="/dashboard/myClass"
              >
                Dashboard
                <div className="badge badge-lg">{cart?.length || 0}</div>
              </Link>
            ) : (
              <Link
                className="text-xl font-bold hover:text-red-600"
                to="/dashboard/cart"
              >
                Dashboard
                <div className="badge badge-lg">{cart?.length || 0}</div>
              </Link>
            )}

            {user ? (
              <>
                <button onClick={handleLogOut} className="btn">
                  Log Out
                </button>
              </>
            ) : (
              <>
                <li>
                  <Link className="btn" to="/login">
                    Log In
                  </Link>
                </li>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <button onClick={() => handleTheme()} className="btn btn-success">
          {theme} Mode
        </button>

        <ul className="menu menu-horizontal px-1">{CommonNavbar}</ul>
      </div>
    </div>
  );
};

export default Header;
