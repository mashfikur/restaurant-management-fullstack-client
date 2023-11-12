import { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import cartImg from "../assets/icon/cartImage.png";
const Navbar = () => {
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
      <NavLink to={"/demo"}>OUR MENU</NavLink>
      <NavLink to={"/demo"}>OUR SHOP</NavLink>
      <NavLink to={"/demo"}>
        {" "}
        <img className="w-[3rem]" src={cartImg} alt="cart-image" />{" "}
      </NavLink>

      <NavLink to={"/demo"}>SIGN OUT</NavLink>
    </>
  );

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
          <div>
            <button className="btn btn-accent">Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
