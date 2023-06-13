import React from "react";

const MyclassCard = ({ teacher }) => {
  const { category, students, img, price } = teacher;
  return (
    <div className="card w-96 bg-base-100 shadow-xl space-y-3 mb-[65px]">
      <figure>
        <img src={img} alt={category} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{category}</h2>
        <p>Price:{price}</p>
        <p>Total Students:{students}</p>
        <div className="flex gap-3 w-full">
          <button className="btn btn-error w-1/2">Delete</button>
          <button className="btn btn-warning w-1/2">Edit</button>
        </div>
      </div>
    </div>
  );
};

export default MyclassCard;
