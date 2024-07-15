/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { ImCart } from "react-icons/im";
import { Link } from "react-router-dom";
import { useGetCartItemsQuery } from "../../redux/api/api";

const Navbar = () => {
    const [isFlippedIcon, setIsFlippedIcon] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleNavIconClick = () => {
        setIsFlippedIcon(!isFlippedIcon);
        setIsDropdownOpen(!isDropdownOpen);
    };
    
    const { data: cartItems, isLoading } = useGetCartItemsQuery({});
    // console.log(cartItems.data.length);

    return (
        <div>
            <div className="navbar shadow-md container mx-auto rounded-md">
                <div className="navbar-start pl-4">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <div>
                                <HiMenuAlt2
                                    onClick={handleNavIconClick}
                                    className={`text-2xl ${
                                        isFlippedIcon ? "scale-x-[-1]" : ""
                                    }`}
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-textGreen ${
                                isDropdownOpen ? "" : "hidden"
                            }`}
                        >
                            <li>
                                <Link to={"/"}>Home</Link>
                            </li>

                            <li>
                                <Link to={"/plants"}>Products</Link>
                            </li>
                        </ul>
                    </div>
                    <Link to={"/"}>
                        <img
                            className="w-4/5 hidden lg:block"
                            src="/src/assets/img/logo.png"
                            alt=""
                        />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-textGreen">
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>

                        <li>
                            <Link to={"/plants"}>Products</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end pr-4 gap-7">
                    <div className="relative">
                        <Link to={"/carts"}>
                            <button className="border px-3 py-2 border-textGreen/50 text-textGreen rounded-md shadow-md cursor-pointer  hover:bg-textGreen hover:text-[#fff] transition duration-200 ease-in-out">
                                <span className="flex items-center gap-2">
                                    <ImCart className="text-xl" />
                                </span>
                            </button>
                        </Link>
                        <span className="absolute -top-2 -right-2 bg-textGreen rounded-full text-backgroundLightGreen w-5 h-5 flex items-center justify-center p-1 text-xs ">
                           {cartItems?.data?.length}
                        </span>
                    </div>
                    <div>
                        <a className="border px-3 py-2 border-textGreen/50 text-textGreen rounded-md shadow-md cursor-pointer  hover:bg-textGreen hover:text-[#fff] transition duration-200 ease-in-out">
                            Dashboard
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
