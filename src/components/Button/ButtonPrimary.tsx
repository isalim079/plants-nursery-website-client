import { ReactNode } from "react";
import { RiArrowRightUpFill } from "react-icons/ri";

type ButtonPrimaryProps = {
    children: ReactNode;
};

const ButtonPrimary = ({ children }: ButtonPrimaryProps) => {
    return (
        <button className="border px-3 py-2 border-textGreen/50 text-textGreen rounded-md shadow-md cursor-pointer  hover:bg-textGreen hover:text-[#fff] transition duration-200 ease-in-out">
            <span className="flex items-center gap-2">
                {children}
                <RiArrowRightUpFill className="text-xl" />
            </span>
        </button>
    );
};

export default ButtonPrimary;
