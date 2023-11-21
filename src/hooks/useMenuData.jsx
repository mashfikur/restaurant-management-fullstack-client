import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenuData = () => {
  const axiosPublic = useAxiosPublic();

  const { data: menu = [], isPending } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      return axiosPublic
        .get("/api/v1/menu")
        .then((res) => {
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
