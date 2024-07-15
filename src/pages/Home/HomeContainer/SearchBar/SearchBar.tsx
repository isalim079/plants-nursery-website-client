import { CgSearch } from "react-icons/cg";
import Heading from "../../../../components/Heading/Heading";
import { useState } from "react";
import { useGetPlantsQuery } from "../../../../redux/api/api";
import { Link } from "react-router-dom";
import Loading from "../../../../components/Loading/Loading";

type Plant = {
    _id: string;
    title: string;
    image: string;
    price: string;
    rating: number;
    categoryName: string;
};

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState<Plant[]>([]);
    const { data: plants, isLoading } = useGetPlantsQuery({});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchTerm(value);

        if (value.length > 0) {
            const filteredSuggestions = plants?.data.filter((plant: Plant) =>
                plant.title.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    if (isLoading) {
        return <Loading />;
    }

    const handleClick = () => {
        if (searchTerm.length > 0) {
            const filteredSuggestions = plants?.data.filter((plant: Plant) =>
                plant.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        }
    };

    return (
        <div className="max-w-screen-lg mx-auto my-24">
            <div className="mb-12">
                <Heading>Search your desire plants!</Heading>
            </div>
            <div className="relative">
                <input
                    className=" rounded-md w-full py-4 bg-backgroundLightGreen shadow-md px-6 focus:outline-textGreen/50"
                    placeholder="Search your plants by title..."
                    type="search"
                    name=""
                    id=""
                    value={searchTerm}
                    onChange={handleChange}
                />
                <button
                    onClick={handleClick}
                    className="bg-backgroundLightGreen p-1 shadow-md absolute top-[27%] right-5 text-2xl  rounded-full text-textGreen text-center flex justify-center items-center"
                >
                    <CgSearch className="" />
                </button>
            </div>

            {suggestions.length > 0 && (
                <div className="absolute z-10 bg-backgroundLightGreen max-w-screen-lg w-full shadow-md rounded-md mt-2">
                    {suggestions.map((plant: Plant) => (
                        <Link
                            key={plant._id}
                            to={`/plantDetails/${plant._id}`}
                            className="block px-4 py-2 hover:bg-textGreen hover:text-backgroundLightGreen transition ease-in-out duration-200"
                        >
                            {plant.title}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
