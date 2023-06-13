import { useEffect, useState } from "react";
import CourseInstructorsCard from "./CourseInstructorsCard";

const CourseInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  //load data
  useEffect(() => {
    fetch("http://localhost:5000/instructors")
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
      });
    console.log(instructors);
  }, []);
  return (
    <div>
      <div className="md:mb-[65px]">
        <h1 className="text-center text-3xl my-[45px]">All Instructors</h1>
        <div className="max-w-7xl grid md:grid-cols-3 grid-cols-1 mx-auto gap-[20px]">
          {instructors.map((instructor) => (
            <CourseInstructorsCard
              key={instructor._id}
              instructor={instructor}
            ></CourseInstructorsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseInstructors;
