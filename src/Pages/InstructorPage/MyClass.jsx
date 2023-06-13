import useInstructors from "../../hooks/useInstructors";
import MyclassCard from "./MyclassCard";

const MyClass = () => {
  const [teacherClasses] = useInstructors();
  console.log(teacherClasses);
  return (
    <div className="text-xl font-bold min-h-screen mt-[25px]">
      <h1 className="text-3xl text-center my-[25px]">
        Your total classes: {teacherClasses.length}
      </h1>
      <div className="grid grid-cols-3 gap-3">
        {teacherClasses.map((teacher) => (
          <MyclassCard key={teacher._id} teacher={teacher}></MyclassCard>
        ))}
      </div>
    </div>
  );
};

export default MyClass;
