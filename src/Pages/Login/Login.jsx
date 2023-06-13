import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
const Login = () => {
  const { emailLogin, popUpSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    emailLogin(email, password)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        Swal.fire("Login Successful");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("Maybe you typed your email address or password incorrectly");
      });
  };
  const handleLoginWithGoogle = () => {
    popUpSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire("Login Successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire("Login failed", error);
      });
  };
  return (
    <div>
      <div className="hero hero-bg md:mt-[95px] ">
        <div className="hero-content flex flex-col md:flex-row">
          <div className="card max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Login"
                  />
                </div>
              </div>
            </form>
            <div className="w-1/2 mx-auto mb-[20px]"></div>
          </div>
        </div>
      </div>
      <div className="grid place-items-center gap-3 mb-[55px]">
        <button onClick={handleLoginWithGoogle} className="btn btn-error">
          Google Login
        </button>
        <Link className="btn btn-secondary text-black" to="/register">
          New? Sign Up
        </Link>
        <Link className="btn btn-success" to="/">
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default Login;
