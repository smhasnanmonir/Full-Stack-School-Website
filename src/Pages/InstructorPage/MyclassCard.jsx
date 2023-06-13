import React from "react";

const MyclassCard = ({ teacher }) => {
  const { category, students, img, price } = teacher;
  return (
    <div className="card w-96 bg-base-100 shadow-xl space-y-3">
      <figure>
        <img src={img} alt={category} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{category}</h2>
        <p>Price:{price}</p>
        <p>Total Students:{students}</p>
        <div className="flex gap-3">
          <button className="btn btn-primary">Delete</button>
          <button className="btn btn-primary">Edit</button>
        </div>
      </div>
    </div>
  );
};

export default MyclassCard;
