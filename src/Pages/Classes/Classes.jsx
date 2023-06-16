import { useEffect, useState } from "react";

import ClassCard from "./ClassCard";

const Classes = () => {
  const [books, setBooks] = useState([]);
  //load data
  useEffect(() => {
    fetch("https://summerschoolserver.vercel.app/classes")
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
