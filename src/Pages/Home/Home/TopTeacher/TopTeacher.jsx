import { useEffect, useState } from "react";
import TopTeacherCard from "./TopTeacherCard";

const TopTeacher = () => {
  const [teachers, setTeacher] = useState([]);
  useEffect(() => {
    fetch("instructor.json")
      .then((res) => res.json())
      .then((data) => {
        setTeacher(data);
      });
  }, []);
  return (
    <div>
      <h1 className="text-3xl text-center md:my-[65px]">Our Top Instructors</h1>
      <div className="grid grid-cols-1 gap-5 mx-auto md:grid-cols-3 max-w-7xl">
        {teachers.map((teacher) => (
          <TopTeacherCard key={teacher.name} teacher={teacher}></TopTeacherCard>
        ))}
      </div>
    </div>
  );
};
export default TopTeacher;
