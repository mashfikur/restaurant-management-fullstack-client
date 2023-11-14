import { useEffect } from "react";
import bg from "../assets/shop/banner2.jpg";
import SectionCover from "../components/Menu/SectionCover";
import Categories from "../components/Shop/Categories";

const OurShop = () => {
  useEffect(() => {
    window.scrollTo(0,500);
  }, []);

  return (
    <div>
      {/* cover section */}
      <SectionCover
        main={true}
        img={bg}
        title={"OUR SHOP"}
        desc={"Would you like to try a dish?"}
      ></SectionCover>

      {/* categories tabs */}
      <Categories></Categories>
    </div>
  );
};

export default OurShop;
