import { FaTrashAlt } from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";
import useCartItem from "../hooks/useCartItem";

const Cart = () => {
  const [cartItems] = useCartItem();

  const totalPrice = cartItems?.reduce((total, item) => {
    return total + item.price;
  }, 0);

  return (
    <div className=" min-h-screen bg-[#F6F6F6] py-12">
      <SectionHeading
        priamary={"WANNA ADD MORE?"}
        secondary={"---My Cart---"}
      ></SectionHeading>

      <div className="w-[62rem] mx-auto  rounded-md bg-white p-14">
        <div className="capitalize font-cinzel flex items-center font-bold">
          <p className=" flex-1 text-3xl">Total Orders: {cartItems?.length} </p>
          <p className=" flex-1 text-3xl">
            Total Price: {totalPrice.toFixed(2)}{" "}
          </p>
          <div className="flex-0">
            <button className="btn bg-[#D1A054] text-white text-lg ">
              Pay
            </button>
          </div>
        </div>

        {/* cart items table */}
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>ITEM IMAGE</th>
                  <th> ITEM Name</th>
                  <th>PRICE</th>
                  <th>ACTION</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cartItems?.map((item, idx) => (
                  <tr key={item._id}>
                    <th>{idx + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={item.image} alt="Item Image" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{item.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p> ${item.price} </p>
                    </td>

                    <th>
                      <button className="btn bg-red-600 hover:bg-red-500 text-white text-lg">
                        {" "}
                        <FaTrashAlt></FaTrashAlt>{" "}
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
