import useAllUser from "../../hooks/useAllUser";
import ManageUserCard from "./ManageUserCard";

const ManageUser = () => {
  const [allUser, refetch] = useAllUser();
  return (
    <div className="min-h-screen mt-[65px]">
      Total user: {allUser.length}
      <div className="grid grid-cols-3 gap-2">
        {allUser.map((user) => (
          <ManageUserCard key={user._id} user={user}></ManageUserCard>
        ))}
      </div>
    </div>
  );
};

export default ManageUser;
