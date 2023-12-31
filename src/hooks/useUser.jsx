import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../Provider/AuthProvider";
const useUser = () => {
  const { user, loading } = useContext(AuthContext);

  const { refetch, data: userRole = [] } = useQuery({
    queryKey: ["users", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `https://school-server-1w5r.onrender.com/users?email=${user?.email}`
      );
      return res.json();
    },
  });

  return [userRole, refetch];
};
export default useUser;
