import { Link } from "react-router-dom";
const Login = () => {
  const handleLogin = () => {
    console.log("Login");
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
        <Link className="btn btn-secondary text-black" to="/signup">
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
