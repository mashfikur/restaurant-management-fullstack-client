import { Link, NavLink } from "react-router-dom";
import { MdHomeFilled, MdReviews } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { IoWalletSharp } from "react-icons/io5";
import { BsFillCartFill } from "react-icons/bs";
import { BiSolidCalendarEdit } from "react-icons/bi";
import useCartItem from "../hooks/useCartItem";

const Sidebar = () => {
  const [cartItems] = useCartItem();

  return (
    <div className="w-[17rem] bg-[#D1A054] min-h-screen">
      <div className="pl-8 ">
        <div className="pt-12">
          <Link to="/">
            <p className="font-cinzel font-black text-2xl">BISTRO BOSS</p>
            <p className="font-cinzel text-xl font-bold tracking-[.35rem]">
              Restaurant
            </p>
          </Link>
        </div>

        {/* sidebar navigation */}
        <div className="mt-20">
          <ul className="space-y-6">
            <li>
              {" "}
              <NavLink
                to="/demo"
                className={({ isActive }) =>
                  isActive
                    ? "active-sidebar flex items-center gap-1  font-cinzel font-semibold "
                    : "flex items-center gap-1  font-cinzel font-semibold "
                }
              >
                <MdHomeFilled className="text-2xl"></MdHomeFilled> User Home{" "}
              </NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink
                to="/demo"
                className={({ isActive }) =>
                  isActive
                    ? "active-sidebar flex items-center gap-1  font-cinzel font-semibold "
                    : "flex items-center gap-1  font-cinzel font-semibold "
                }
              >
                {" "}
                <FaCalendarAlt className="text-2xl"></FaCalendarAlt> Reservation{" "}
              </NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink
                to="/demo"
                className={({ isActive }) =>
                  isActive
                    ? "active-sidebar flex items-center gap-1  font-cinzel font-semibold "
                    : "flex items-center gap-1  font-cinzel font-semibold "
                }
              >
                {" "}
                <IoWalletSharp className="text-2xl"></IoWalletSharp> Payment
                History{" "}
              </NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink
                to="/dashboard/my-cart"
                className={({ isActive }) =>
                  isActive
                    ? "active-sidebar flex items-center gap-1  font-cinzel font-semibold "
                    : "flex items-center gap-1  font-cinzel font-semibold "
                }
              >
                {" "}
                <BsFillCartFill className="text-2xl"></BsFillCartFill> My Cart ({" "}
                {cartItems.length} )
              </NavLink>{" "}
            </li>

            <li>
              {" "}
              <NavLink
                to="/demo"
                className={({ isActive }) =>
                  isActive
                    ? "active-sidebar flex items-center gap-1  font-cinzel font-semibold "
                    : "flex items-center gap-1  font-cinzel font-semibold "
                }
              >
                {" "}
                <MdReviews className="text-2xl"></MdReviews> Add Review{" "}
              </NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink
                to="/demo"
                className={({ isActive }) =>
                  isActive
                    ? "active-sidebar flex items-center gap-1  font-cinzel font-semibold "
                    : "flex items-center gap-1  font-cinzel font-semibold "
                }
              >
                {" "}
                <BiSolidCalendarEdit className="text-2xl"></BiSolidCalendarEdit>{" "}
                My Booking{" "}
              </NavLink>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
