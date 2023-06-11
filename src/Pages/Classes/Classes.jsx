import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Classes = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
    console.log(books);
  }, []);
  return (
    <div className="md:mb-[65px]">
      <h1 className="text-center text-3xl my-[45px]">
        Book Your Favorite Class
      </h1>
      <div className="max-w-7xl grid md:grid-cols-3 grid-cols-1 mx-auto gap-[20px]">
        {books.map((book) => (
          <div
            key={book._id}
            className="card card-compact w-96 bg-base-100 shadow-xl"
          >
            <figure>
              <img src={book.img} alt={book.category} />
            </figure>
            <div className="card-body space-y-3">
              <h2 className="text-2xl font-bold">
                {book.category} Movie Class
              </h2>
              <p className="text-[18px]">
                You will learn about {book.category} movies
              </p>
              <p className="text-[18px]">Student Enrolled: {book.students}</p>
              <p className="text-[18px]">
                Course Instructor: {book?.instructor}
              </p>
              <div className="card-actions">
                <button className="btn btn-outline">Add To Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
