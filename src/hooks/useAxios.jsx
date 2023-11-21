import axios from "axios";
import useAuth from "./useAuth";
import toast from "react-hot-toast";

const useAxios = () => {
  const { userSignOut } = useAuth();

  const axiosCustom = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
  });

  axiosCustom.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;

    return config;
  });

  // intercepts 401 and 403 status
  axiosCustom.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      // console.log('status error in the interceptor', status);
      // for 401 or 403 logout the user and move the user to the login
      if (status === 401 || status === 403) {
        userSignOut();
        toast.error("An error Occured , Login to fix it");
      }
      return Promise.reject(error);
    }
  );
  return axiosCustom;
};

export default useAxios;
