import PropTypes from "prop-types";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const TabCards = ({ items }) => {
  const { user } = useAuth();
  const axiosCustom = useAxios();

  const handleAddCart = (_id) => {
    const itemInfo = { itemId: _id, userId: user.uid };

    // adding to databse
    axiosCustom
      .post("/api/v1/user/add-cart", itemInfo)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Added Item to Cart");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="my-12">
      <div className="grid grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            className="text-center flex flex-col bg-[#F3F3F3] "
            key={item._id}
          >
            <img className="w-full mb-8" src={item.image} alt="" />
            <div className="flex-grow">
              <h3 className="font-semibold text-lg mb-1"> {item.name} </h3>
              <p className="text-[#737373]"> {item.recipe} </p>
            </div>
            <div className="flex flex-col items-center my-8 justify-center">
              <button
                onClick={() => handleAddCart(item._id)}
                className="btn bg-[#E8E8E8] hover:bg-[#111827] text-[#BB8506] border-b-4 hover:border-b-[#BB8506] border-b-[#BB8506] "
              >
                add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

TabCards.propTypes = {
  items: PropTypes.array,
};

export default TabCards;
