import PropTypes from "prop-types";
import useMenuData from "../../hooks/useMenuData";
import { useContext } from "react";
import { SharedContext } from "../../context/SharedInfo";
import { Link } from "react-router-dom";

const SingleMenu = ({ category }) => {
  const { setOrderedCategory } = useContext(SharedContext);
  const [menu] = useMenuData();
  console.log(menu);
  const categoryData = menu.filter((data) => data.category === category);

  return (
    <div className="max-w-7xl mb-12 mt-28 mx-auto">
      <div className="grid grid-cols-2 gap-8">
        {categoryData.map((data) => (
          <div className="flex gap-6" key={data._id}>
            <div>
              <img
                style={{
                  borderRadius: "0rem 12.5rem 12.5rem 12.5rem",
                  width: "7.3rem",
                  height: "6.5rem",
                }}
                src={data.image}
                alt="menu-image"
                className="object-cover"
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
        <Link to="/our-shop">
          <button
            onClick={() =>
              setOrderedCategory(
                category === "soup"
                  ? "soups"
                  : category || category === "dessert"
                  ? "desserts"
                  : category
              )
            }
            className="btn tracking-wide text-base btn-outline border-b-4 border-x-0 border-t-0"
          >
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

SingleMenu.propTypes = {
  category: PropTypes.string,
};

export default SingleMenu;
