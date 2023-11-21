import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenuData = () => {
  const axiosPublic = useAxiosPublic();

  console.log("hello");

  const { data: menu = [], isPending } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      console.log("server data");
      return axiosPublic
        .get("/api/v1/menu")
        .then((res) => {
          console.log(res.data);
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  return [menu, isPending];
};

export default useMenuData;
