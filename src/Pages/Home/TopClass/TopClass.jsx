import { useEffect, useState } from "react";
import TopClassCard from "./TopClassCard";
import { Fade, Flip, Slide } from "react-awesome-reveal";

const TopClass = () => {
  const [showData, setShowData] = useState([]);
  useEffect(() => {
    fetch("/movieData.json")
      .then((res) => res.json())
      .then((data) => {
        setShowData(data);
      });
  }, []);
  return (
    <div className="grid place-items-center">
      <Slide>
        <h1 className="text-3xl text-center my-[55px]">Our Popular Classes</h1>
      </Slide>
      <Fade delay={1e3} cascade damping={1e-1}>
        <div className="grid grid-cols-1 gap-5 mx-auto md:grid-cols-3 max-w-7xl">
          {showData.map((dat) => (
            <TopClassCard key={dat.category} dat={dat}></TopClassCard>
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default TopClass;
