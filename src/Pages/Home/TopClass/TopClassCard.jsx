import { Link } from "react-router-dom";

const TopClassCard = ({ dat }) => {
  const { category, students, img } = dat;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt={category} />
      </figure>
      <div className="card-body space-y-3">
        <h2 className="text-2xl font-bold">{category} Movie Class</h2>
        <p className="text-[18px]">You will learn about {category} movies</p>
        <p className="text-[18px]">Student Enrolled: {students}</p>
        <div className="card-actions">
          <Link to="/class">
            <button className="btn btn-outline">
              Go to All classes page to see more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopClassCard;
