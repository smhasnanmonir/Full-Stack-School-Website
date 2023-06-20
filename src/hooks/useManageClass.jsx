import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "react-query";

const useManageClass = () => {
  const { user, loading } = useContext(AuthContext);

  const { refetch, data: manageClasses = [] } = useQuery({
    queryKey: ["manageClasses", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        "https://school-server-1w5r.onrender.com/classes"
      );
      return res.json();
    },
  });

  return [manageClasses, refetch];
};

export default useManageClass;
