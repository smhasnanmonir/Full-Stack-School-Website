const CourseInstructorsCard = ({ instructor }) => {
  const { name, students, price, email, img } = instructor;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div className="card-body space-y-3">
        <h2 className="text-2xl font-bold">Instructor name: {name}</h2>
        <p className="text-[18px]">
          <span className="font-bold">Student Enrolled:</span> {students}
        </p>
        <p className="text-[18px]">
          <span className="font-bold">Email:</span> {email}
        </p>
        <p className="text-[18px]">
          <span className="font-bold">Course price:</span> {price} taka
        </p>
      </div>
    </div>
  );
};

export default CourseInstructorsCard;
