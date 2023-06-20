import { useQuery } from "react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useInstructors = () => {
  const { user, loading } = useContext(AuthContext);

  const { refetch, data: teacherClasses = [] } = useQuery({
    queryKey: ["teacherClasses", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `https://school-server-1w5r.onrender.com/classes/email?email=${user?.email}`
      );
      return res.json();
    },
  });

  return [teacherClasses, refetch];
};

export default useInstructors;
