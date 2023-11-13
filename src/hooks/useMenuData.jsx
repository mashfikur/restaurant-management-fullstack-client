import { useEffect, useState } from "react";

const useMenuData = () => {
  const [menu, setMenu] = useState([]);
  const [menuLoading, setMenuLoading] = useState(true);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setMenuLoading(false);
      });
  }, []);

  return [menu, menuLoading];
};

export default useMenuData;
