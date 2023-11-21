import { FaTrashAlt } from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";
import useCartItem from "../hooks/useCartItem";
import Swal from "sweetalert2";
import useAxios from "../hooks/useAxios";
import toast from "react-hot-toast";

const Cart = () => {
  const [cartItems, refetch, isPending] = useCartItem();
  const axiosCustom = useAxios();

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price;
  }, 0);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Do You want to Delete it?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // delete the itme from databse
        axiosCustom
          .delete(`/api/v1/user/delete-item/${_id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount) {
              refetch();
              toast.success("Deleted Item");
            }
          })
          .catch((error) => {
            toast.error(error.code);
          });
      }
    });
  };

  return (
    <div className=" min-h-screen  bg-[#F6F6F6] py-12">
      <SectionHeading
        priamary={"WANNA ADD MORE?"}
        secondary={"---My Cart---"}
      ></SectionHeading>

      {isPending ? (
        <div className="w-[62rem] min-h-screen rounded-md  mx-auto bg-white rounded-md"></div>
      ) : (
        <div className="w-[62rem]  mx-auto  rounded-md bg-white p-14">
          <div className="capitalize font-cinzel flex items-center font-bold">
            <p className=" flex-1 text-3xl">
              Total Orders: {cartItems?.length}{" "}
            </p>
            <p className=" flex-1 text-3xl">
              Total Price: {totalPrice && totalPrice.toFixed(2)}{" "}
            </p>
            <div className="flex-0">
              <button className="btn bg-[#D1A054] text-white text-lg ">
                Pay
              </button>
            </div>
          </div>

          {/* cart items table */}
          <div>
            <div className="overflow-x-auto mt-5 overflow-y-auto h-[50vh]">
              <table className="table">
                {/* head */}
                <thead className="bg-[#D1A054] rounded-t-md font-semibold  text-white custom-table  ">
                  <tr>
                    <th>ITEM IMAGE</th>
                    <th> ITEM Name</th>
                    <th>PRICE</th>
                    <th>ACTION</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="mt-5 ">
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
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="btn bg-red-600 hover:bg-red-500 text-white text-lg"
                        >
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
      )}
    </div>
  );
};

export default Cart;
