import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useCheckAdmin = () => {
  const axiosCustom = useAxios();
  const { user } = useAuth();
  let isAdmin;

  // verifying if the user is our admin
  const { data, isPending } = useQuery({
    queryKey: ["admin", user?.email],
    queryFn: async () => {
      return axiosCustom
        .get(`/api/v1/user/check-admin/${user.uid}`)
        .then((res) => {
          return res.data;
        });
    },
  });

  if (data?.admin) {
    isAdmin = true;
  } else {
    isAdmin = false;
  }

  return [isAdmin, isPending];
};

export default useCheckAdmin;
