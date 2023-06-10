import { useEffect, useState } from "react";
import TopClassCard from "./TopClassCard";

const TopClass = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/smhasnanmonir/API-Testing/main/movie-class.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);
  console.log(movies);
  return (
    <div>
      <h1 className="text-3xl text-center my-[35px]">Our Top Classes</h1>
      <div className="grid grid-cols-1 gap-5 mx-auto md:grid-cols-3 max-w-7xl">
        {movies.map((movie) => (
          <TopClassCard key={movie.category} movie={movie}></TopClassCard>
        ))}
      </div>
    </div>
  );
};

export default TopClass;
