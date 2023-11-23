import { Link, NavLink } from "react-router-dom";
import { MdHomeFilled, MdReviews } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { IoWalletSharp } from "react-icons/io5";
import { BsFillCartFill } from "react-icons/bs";
import { BiSolidCalendarEdit } from "react-icons/bi";
import useCartItem from "../hooks/useCartItem";
import { MdOutlineMenu, MdMail } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";

import { FaUsers } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { FaBook } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import useCheckAdmin from "../hooks/useCheckAdmin";
const Sidebar = () => {
  const [cartItems] = useCartItem();
  const [isAdmin, isAdminLoading] = useCheckAdmin();

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
          {/* conditionally changable links */}

          {isAdminLoading ? (
            <div>
              <span className="loading loading-dots loading-lg"></span>
            </div>
          ) : (
            <>
              {isAdmin ? (
                <>
                  {/* admin links */}
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
                        <MdHomeFilled className="text-2xl"></MdHomeFilled> Admin
                        Home{" "}
                      </NavLink>{" "}
                    </li>
                    <li>
                      {" "}
                      <NavLink
                        to="/dashboard/add-item"
                        className={({ isActive }) =>
                          isActive
                            ? "active-sidebar flex items-center gap-1  font-cinzel font-semibold "
                            : "flex items-center gap-1  font-cinzel font-semibold "
                        }
                      >
                        {" "}
                        <ImSpoonKnife className="text-2xl"></ImSpoonKnife> Add
                        Items{" "}
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
                        <TfiMenuAlt className="text-2xl"></TfiMenuAlt>
                        Manage Items{" "}
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
                        <FaBook className="text-2xl"></FaBook>
                        Manage Bookings
                      </NavLink>{" "}
                    </li>

                    <li>
                      {" "}
                      <NavLink
                        to="/dashboard/all-users"
                        className={({ isActive }) =>
                          isActive
                            ? "active-sidebar flex items-center gap-1  font-cinzel font-semibold "
                            : "flex items-center gap-1  font-cinzel font-semibold "
                        }
                      >
                        {" "}
                        <FaUsers className="text-2xl"></FaUsers> All Users{" "}
                      </NavLink>{" "}
                    </li>
                  </ul>
                </>
              ) : (
                <>
                  {/* user links */}
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
                        <MdHomeFilled className="text-2xl"></MdHomeFilled> User
                        Home{" "}
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
                        <FaCalendarAlt className="text-2xl"></FaCalendarAlt>{" "}
                        Reservation{" "}
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
                        <IoWalletSharp className="text-2xl"></IoWalletSharp>{" "}
                        Payment History{" "}
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
                        <BsFillCartFill className="text-2xl"></BsFillCartFill>{" "}
                        My Cart ( {cartItems?.length} )
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
                </>
              )}
            </>
          )}

          <hr className="my-10 mr-6" />

          {/* fixed links */}

          <ul className="space-y-6">
            <li>
              {" "}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "active-sidebar flex items-center gap-1  font-cinzel font-semibold "
                    : "flex items-center gap-1  font-cinzel font-semibold "
                }
              >
                <MdHomeFilled className="text-2xl"></MdHomeFilled> Home{" "}
              </NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink
                to="/our-menu"
                className={({ isActive }) =>
                  isActive
                    ? "active-sidebar flex items-center gap-1  font-cinzel font-semibold "
                    : "flex items-center gap-1  font-cinzel font-semibold "
                }
              >
                <MdOutlineMenu className="text-2xl"></MdOutlineMenu> Menu{" "}
              </NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink
                to="/our-shop"
                className={({ isActive }) =>
                  isActive
                    ? "active-sidebar flex items-center gap-1  font-cinzel font-semibold "
                    : "flex items-center gap-1  font-cinzel font-semibold "
                }
              >
                <FaShoppingBag className="text-2xl"></FaShoppingBag> Shop{" "}
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
                <MdMail className="text-2xl"></MdMail>Contact{" "}
              </NavLink>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
