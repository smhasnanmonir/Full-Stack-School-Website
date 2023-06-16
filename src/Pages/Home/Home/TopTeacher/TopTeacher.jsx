import { useEffect, useState } from "react";
import TopTeacherCard from "./TopTeacherCard";
import { AttentionSeeker, Fade, Slide } from "react-awesome-reveal";

const TopTeacher = () => {
  const [teachers, setTeacher] = useState([]);
  useEffect(() => {
    fetch("/instructor.json")
      .then((res) => res.json())
      .then((data) => {
        setTeacher(data);
      });
  }, []);
  return (
    <AttentionSeeker effect="headShake">
      <div className="grid place-items-center">
        <Slide>
          <h1 className="text-3xl text-center md:my-[65px] my-[35px]">
            Our Top Instructors
          </h1>
        </Slide>
        <Fade delay={1e3} cascade damping={1e-1}>
          <div className="grid grid-cols-1 gap-5 mx-auto md:grid-cols-3 max-w-7xl">
            {teachers.map((teacher) => (
              <TopTeacherCard
                key={teacher.name}
                teacher={teacher}
              ></TopTeacherCard>
            ))}
          </div>
        </Fade>
      </div>
    </AttentionSeeker>
  );
};
export default TopTeacher;
