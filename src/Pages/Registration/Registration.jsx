import { useForm } from "react-hook-form";

const Registration = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    reset();
  };
  return (
    <div className="lg:w-[575px] w-[375px] my-[45px] mx-auto">
      <h1 className="mb-[35px] text-3xl text-center">
        Please Enter Valid Information to Register.
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-cyan-200 bg-opacity-30 rounded-xl p-5 "
      >
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              {...register("email", { required: true })}
              placeholder="Example: summercamp@gmail.com"
              className="input input-bordered"
            />
            {errors.email && (
              <span className="text-orange-400 mt-2">
                You can not register without an email address.
              </span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              {...register("name", { required: true })}
              placeholder="Example: Chandler Bing"
              className="input input-bordered"
            />
            {errors.name && (
              <span className="text-orange-400 mt-2">Please give a name.</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              {...register("PhotoURL", { required: true })}
              placeholder="Photo URL"
              className="input input-bordered"
            />
            {errors.name && (
              <span className="text-orange-400 mt-2">
                Please enter a photo url.
              </span>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              {...register("password", {
                required: true,
                minLength: 6,
              })}
              placeholder="Enter password"
              className="input input-bordered"
            />
            {errors.password && (
              <span className="text-orange-400 mt-2" role="alert">
                Enter longer password.
              </span>
            )}
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Register" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Registration;
