import { useForm } from "react-hook-form";
import { Link, useLoaderData } from "react-router-dom";
import useManageClass from "../../hooks/useManageClass";
import Swal from "sweetalert2";

const FeedBackClass = () => {
  const oldData = useLoaderData();
  const { _id, category } = oldData;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [, refetch] = useManageClass();

  const onSubmit = (data) => {
    const sendData = {
      feedback: data.feedback,
    };
    console.log(sendData);
    Swal.fire({
      title: "Send This Feedback?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Send Feed Back!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://summerschoolserver.vercel.app/classes/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(sendData),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              refetch();
              Swal.fire("Feed back successfully.");
            }
          });
      }
    });
  };
  return (
    <div className="lg:w-[575px] w-[375px] my-[45px] mx-auto">
      <h1 className="mb-[35px] text-3xl text-center font-mono font-bold">
        Feed Back {category} Class
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-cyan-200 bg-opacity-30 rounded-xl p-5 "
      >
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Feedback</span>
            </label>
            <input
              type="text"
              name="feedback"
              {...register("feedback", { required: true })}
              placeholder="Write feedback"
              className="input input-bordered"
            />
            {errors.feedback && (
              <span className="text-orange-400 mt-2">Send Feed Back</span>
            )}
          </div>

          <div className="form-control mt-6">
            <input
              className="btn btn-primary"
              type="submit"
              value="Send Feedback"
            />
          </div>
        </div>
      </form>
      <Link to="/dashboard/manageClasses" className="btn btn-primary mt-[25px]">
        Back to Dashboard
      </Link>
    </div>
  );
};

export default FeedBackClass;
