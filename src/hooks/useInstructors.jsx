import { useQuery } from "react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useInstructors = () => {
  const { user, loading } = useContext(AuthContext);

  const { refetch, data: teacherClasses = [] } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/classes/email?email=${user?.email}`
      );
      return res.json();
    },
  });

  return [teacherClasses, refetch];
};

export default useInstructors;