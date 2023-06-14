import useManageClass from "../../hooks/useManageClass";
import PendingClassCard from "./PendingClassCard";

const ManageClasses = () => {
  const [manageClasses] = useManageClass();
  const filteredPendingClass = manageClasses.filter(
    (pending) => pending?.status === "Pending"
  );
  return (
    <div className="min-h-screen">
      <h1 className="text-3xl font-mono font-bold text-center mt-7">
        Manage Classes
      </h1>
      <div className="grid grid-cols-3 gap-3 mt-[25px]">
        {manageClasses.map((pendingClass) => (
          <PendingClassCard
            key={pendingClass._id}
            pendingClass={pendingClass}
          ></PendingClassCard>
        ))}
      </div>
    </div>
  );
};

export default ManageClasses;
