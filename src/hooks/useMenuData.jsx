import { useEffect, useState } from "react";
import useAxios from "./useAxios";

const useMenuData = () => {
  const [menu, setMenu] = useState([]);
  const [menuLoading, setMenuLoading] = useState(true);

  const axiosCustom = useAxios();

  useEffect(() => {
    axiosCustom.get("/api/v1/menu").then((res) => {
      setMenu(res.data);
      setMenuLoading(false);
    });
  }, [axiosCustom]);

  return [menu, menuLoading];
};

export default useMenuData;
