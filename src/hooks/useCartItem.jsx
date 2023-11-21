import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useCartItem = () => {
  const axiosCustom = useAxios();
  const { user } = useAuth();

  // fetching cart items for individual user
  const { data: cartItems, refetch ,isPending } = useQuery({
    queryKey: ["cart",user?.email],
    queryFn: async () => {
      return axiosCustom
        .get(`/api/v1/user/get-cart/${user?.uid}`)
        .then((res) => {
          return res.data;
        });
    },
  });

  return [cartItems, refetch,isPending];
};

export default useCartItem;
