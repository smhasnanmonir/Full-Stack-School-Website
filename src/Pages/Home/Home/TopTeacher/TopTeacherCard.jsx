import { Link } from "react-router-dom";

const TopTeacherCard = ({ teacher }) => {
  const { name, students, img } = teacher;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div className="card-body space-y-3">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-[18px]">You will learn about movies from him.</p>
        <p className="text-[18px]">Student Enrolled: {students}</p>
        <Link to="/instructors">
          <div className="card-actions">
            <button className="btn btn-outline">
              Go to All instructor page
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TopTeacherCard;
