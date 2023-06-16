import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const useAxiosSecure = () => {
  const { signOutFromWeb } = useAuth();
  const navigate = useNavigate();

  const axiosSecure = axios.create({
    baseURL: "https://summerschoolserver.vercel.app",
  });

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await signOutFromWeb();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [signOutFromWeb, navigate, axiosSecure]);

  return [axiosSecure];
};

export default useAxiosSecure;
