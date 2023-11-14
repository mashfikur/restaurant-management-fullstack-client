import PropTypes from "prop-types";

const TabCards = ({ items }) => {
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
              <button className="btn bg-[#E8E8E8] hover:bg-[#111827] text-[#BB8506] border-b-4 hover:border-b-[#BB8506] border-b-[#BB8506] ">
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
