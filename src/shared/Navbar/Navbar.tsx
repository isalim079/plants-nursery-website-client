import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";

const Navbar = () => {
    const [isFlippedIcon, setIsFlippedIcon] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleNavIconClick = () => {
        setIsFlippedIcon(!isFlippedIcon);
        setIsDropdownOpen(!isDropdownOpen);
    };

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
                                <a>Home</a>
                            </li>

                            <li>
                                <a>Products</a>
                            </li>
                        </ul>
                    </div>
                    <a>
                        <img
                            className="w-4/5"
                            src="/src/assets/img/logo.png"
                            alt=""
                        />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-textGreen">
                        <li>
                            <a>Home</a>
                        </li>

                        <li>
                            <a>Products</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end pr-4">
                    <a className="border px-3 py-2 border-textGreen/50 text-textGreen rounded-md shadow-md cursor-pointer  hover:bg-textGreen hover:text-[#fff] transition duration-200 ease-in-out">
                        Dashboard
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
