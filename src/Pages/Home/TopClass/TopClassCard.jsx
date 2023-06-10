const TopClassCard = ({ movie }) => {
  const { category, students, img } = movie;
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
          <button className="btn btn-outline">Enroll Now</button>
        </div>
      </div>
    </div>
  );
};

export default TopClassCard;
