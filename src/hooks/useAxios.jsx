import axios from "axios";

const useAxios = () => {
  const axiosCustom = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
  });

  axiosCustom.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;

    return config;
  });

  return axiosCustom;
};

export default useAxios;
