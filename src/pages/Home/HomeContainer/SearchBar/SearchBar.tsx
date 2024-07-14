import { CgSearch } from "react-icons/cg";
import Heading from "../../../../components/Heading/Heading";

const SearchBar = () => {
    return (
        <div className="max-w-screen-lg mx-auto my-24">
            <div className="mb-12">
            <Heading>Search your desire plants!</Heading>
            </div>
            <div className="relative">
                <input
                    className=" rounded-md w-full py-4 bg-backgroundLightGreen shadow-md px-6 focus:outline-textGreen/50"
                    placeholder="Search your plants..."
                    type="search"
                    name=""
                    id=""
                />
                <button className="bg-backgroundLightGreen p-1 shadow-md absolute top-[27%] right-5 text-2xl  rounded-full text-textGreen text-center flex justify-center items-center">
                    <CgSearch className="" />
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
