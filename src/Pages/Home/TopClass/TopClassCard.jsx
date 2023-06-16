import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const TopClassCard = ({ dat }) => {
  const { category, students, img } = dat;
  return (
    <Fade delay={1e3} cascade damping={1e-1}>
      <div className="card card-compact w-96 bg-base-100 shadow-xl lg:hover-card">
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
    </Fade>
  );
};

export default TopClassCard;
