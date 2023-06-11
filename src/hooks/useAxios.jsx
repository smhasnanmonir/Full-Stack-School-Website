import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const useAxios = () => {
  const axiosFetch = axios.create({
    baseURL: "http://localhost:5000/",
  });
  return [axiosFetch];
};

export default useAxios;
