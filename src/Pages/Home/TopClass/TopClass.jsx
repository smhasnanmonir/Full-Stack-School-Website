import { useEffect, useState } from "react";
import TopClassCard from "./TopClassCard";

const TopClass = () => {
  const [showData, setShowData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        setShowData(data);
      });
  }, []);
  console.log(showData);
  return (
    <div>
      <h1 className="text-3xl text-center my-[55px]">Our Popular Classes</h1>
      <div className="grid grid-cols-1 gap-5 mx-auto md:grid-cols-3 max-w-7xl">
        {showData.map((dat) => (
          <TopClassCard key={dat.category} dat={dat}></TopClassCard>
        ))}
      </div>
    </div>
  );
};

export default TopClass;
