import { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { FaShoppingCart } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
const Navbar = () => {
  const { user, loading, userSignOut, setLoading } = useAuth();

  const focusRef = useRef();

  const handleFocus = () => {
    focusRef.current.blur();
    console.log("hello");
  };

  const navLinks = (
    <>
      <NavLink to={"/"}>HOME</NavLink>
      <NavLink to={"/demo"}>CONTACT US</NavLink>
      <NavLink to={"/demo"}>DASHBOARD</NavLink>
      <NavLink to={"/our-menu"}>OUR MENU</NavLink>
      <NavLink to={"/our-shop"}>OUR SHOP</NavLink>
      <NavLink to={"/demo"}>
        <div className="flex items-center gap-1">
          <FaShoppingCart className="text-2xl" />
          <div className="badge badge-warning">+0</div>
        </div>
      </NavLink>
    </>
  );

  const handleSignOut = () => {
    userSignOut()
      .then(() => {
        toast.success("Logged Out Successfully");
      })
      .catch((error) => {
        toast.error(error.code);
        setLoading(false);
      });
  };

  return (
    <div>
      <div className="navbar fixed z-10 bg-black bg-opacity-20 text-white lg:px-12">
        <div className="navbar-start w-[60%] lg:w-[30%]">
          <div ref={focusRef} className=" dropdown lg:hidden">
            <label className=" bg-yellow-500 p-1   rounded-full mr-3 swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input onChange={handleFocus} type="checkbox" />

              {/* hamburger icon */}
              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>

              {/* close icon */}
              <svg
                className="swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>

          <Link>
            <p className="font-cinzel font-black text-2xl">BISTRO BOSS</p>
            <p className="font-cinzel text-xl font-bold tracking-[.35rem]">
              Restaurant
            </p>
          </Link>
        </div>

        <div className="navbar-end w-[70%] hidden lg:flex">
          <ul className="menu menu-horizontal flex items-center font-extrabold  space-x-8">
            {navLinks}
          </ul>
          <div className="flex">
            {loading ? (
              <div>
                <span className="loading loading-lg loading-spinner text-warning"></span>
              </div>
            ) : user ? (
              <div className="flex ml-5 gap-3">
                <div>
                  {/* dropdown */}
                  <div className="dropdown  dropdown-left dropdown-bottom">
                    <div
                      tabIndex={0}
                      className="flex py-2 cursor-pointer items-center gap-2 bg-warning text-black px-4 rounded-full"
                    >
                      <img
                        className="w-8 h-8 rounded-full  object-cover"
                        src={
                          user
                            ? user.photoURL
                            : "https://i.ibb.co/v1rS1K4/Frame.png"
                        }
                        alt="user-image"
                      />{" "}
                      <p className="font-semibold"> {user.displayName} </p>
                    </div>

                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52 bg-warning text-black"
                    >
                      <div className="flex flex-col items-center">
                        <button
                          onClick={handleSignOut}
                          className="btn rounded-full  w-full"
                        >
                          <TbLogout className="text-2xl" />
                          Sign Out
                        </button>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                {" "}
                <Link to="/login">
                  <button className="btn btn-warning rounded-full px-6 ">
                    Sign In
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
