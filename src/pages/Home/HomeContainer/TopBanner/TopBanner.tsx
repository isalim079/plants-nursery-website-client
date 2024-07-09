import { RiArrowRightUpFill } from "react-icons/ri";

const TopBanner = () => {
    return (
        <div className="container mx-auto">
            <div className="flex justify-around items-center w-full bg-backgroundLightGreen py-24 rounded-b-2xl shadow-md text-textGreen">
                <div>
                    <h1 className="font-playWrite font-bold text-5xl mb-6">
                        Discover the Beauty of Nature
                    </h1>
                    <p className="font-playWrite text-lg mb-6">
                        Bringing the Best Plants from Our Nursery to Your Home
                    </p>
                    <button className="border px-3 py-2 border-textGreen/50 text-textGreen rounded-md shadow-md cursor-pointer  hover:bg-textGreen hover:text-[#fff] transition duration-200 ease-in-out">
                        <span className="flex items-center gap-2">
                            See All Plants{" "}
                            <RiArrowRightUpFill className="text-xl" />
                        </span>
                    </button>
                </div>
                <div className="w-[20%]">
                    <img
                        className=" rounded-3xl shadow-lg"
                        src="https://i.ibb.co/vYy37ym/banner-Plants1.jpg"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default TopBanner;
