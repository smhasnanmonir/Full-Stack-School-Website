import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "react-query";

const useAllUser = () => {
  const { user, loading } = useContext(AuthContext);

  const { refetch, data: allUsers = [] } = useQuery({
    queryKey: ["allUsers", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch("https://summerschoolserver.vercel.app/allUsers");
      return res.json();
    },
  });

  return [allUsers, refetch];
};

export default useAllUser;
