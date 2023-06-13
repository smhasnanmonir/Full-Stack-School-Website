import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import ClassCard from "./ClassCard";
import useCart from "../../hooks/useCart";

const Classes = () => {
  const [books, setBooks] = useState([]);
  //load data
  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);

  return (
    <div className="md:mb-[65px]">
      <h1 className="text-center text-3xl my-[45px]">
        Book Your Favorite Class
      </h1>
      <div className="max-w-7xl grid md:grid-cols-3 grid-cols-1 mx-auto gap-[20px]">
        {books.map((book) => (
          <ClassCard key={book._id} book={book}></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
