import SectionHeading from "../SectionHeading";
import useMenuData from "../../hooks/useMenuData";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import loader from "../../assets/others/loader3.gif";

const OurMenu = ({ category }) => {
  const [menu, menuLoading] = useMenuData();
  console.log(menu)
  const popular = menu.filter((data) => data.category === category);

  return (
    <div className="max-w-7xl mx-auto">
      <SectionHeading
        priamary={"FROM OUR MENU"}
        secondary={"---Check it out---"}
      ></SectionHeading>

      {menuLoading && (
        <div className="flex items-center justify-center min-h-[50vh]">
          <img src={loader} alt="" />
        </div>
      )}

      <div className="grid grid-cols-2 gap-8">
        {popular.map((data) => (
          <div className="flex gap-6" key={data._id}>
            <div>
              <img
                style={{ borderRadius: "0rem 12.5rem 12.5rem 12.5rem" }}
                src={data.image}
                alt="menu-image"
                className="w-[7.3rem] h-[6.5rem] object-cover"
              />
            </div>
            <div>
              <h3 className="font-cinzel text-xl">
                {" "}
                {data.name} ---------------{" "}
              </h3>
              <h3 className="text-[#737373]"> {data.recipe} </h3>
            </div>
            <div>
              <h3 className="text-[#BB8506] text-lg"> ${data.price} </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center mt-12 ">
        <Link to="/our-menu">
          <button className="btn btn-outline border-b-4">view full menu</button>
        </Link>
      </div>
    </div>
  );
};

OurMenu.propTypes = {
  category: PropTypes.string,
};

export default OurMenu;
