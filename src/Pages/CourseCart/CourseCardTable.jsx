const CourseCardTable = ({ item }) => {
  const { category, price, img } = item;

  return (
    <div>
      <div className="flex gap-3 align-middle items-center mb-3 p-5 bg-red-300 rounded-md justify-center mt-[15px]">
        <img className="w-[75px] rounded-lg" src={img} />
        <p>{category} course</p>
        <p>$ {price}</p>
        <button className="btn btn-outline">Remove</button>
      </div>
    </div>
  );
};

export default CourseCardTable;
