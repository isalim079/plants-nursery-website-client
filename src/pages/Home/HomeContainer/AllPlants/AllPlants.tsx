/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import {
    useAddPlantToCartMutation,
    useGetPlantsQuery,
} from "../../../../redux/api/api";
import { Rating, RoundedStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import ButtonPrimary from "../../../../components/Button/ButtonPrimary";
import Heading from "../../../../components/Heading/Heading";
import SubHeading from "../../../../components/SubHeading/SubHeading";
import { Link } from "react-router-dom";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Loading from "../../../../components/Loading/Loading";
import toast from "react-hot-toast";

type Plant = {
    _id: string;
    title: string;
    image: string;
    price: string;
    rating: number;
    quantity: number;
    categoryName: string;
    description: string;
    isCheckout: boolean;
};

const myStyles = {
    itemShapes: RoundedStar,
    activeFillColor: "#4A5F4B",
    inactiveFillColor: "#EDF2E6",
    itemStrokeWidth: 2,
};

const AllPlants = () => {
    const { data: plants, isLoading } = useGetPlantsQuery({});

    const [selectedCategory, setSelectedCategory] = useState<string>("");

    // Pagination

    const [currentPage, setCurrentPage] = useState(1);

    const plantsPerPage = 4;

    const indexOfLastPlant = currentPage * plantsPerPage;
    const indexOfFirstPlant = indexOfLastPlant - plantsPerPage;

    const filteredPlants = selectedCategory
        ? plants?.data.filter(
              (plant: Plant) => plant.categoryName === selectedCategory
          )
        : plants?.data;

    const currentPlants = filteredPlants?.slice(
        indexOfFirstPlant,
        indexOfLastPlant
    );

    const pageNumbers = [];

    for (
        let i = 1;
        i <= Math.ceil(filteredPlants?.length / plantsPerPage);
        i++
    ) {
        pageNumbers.push(i);
    }

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const handlePreviousClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < pageNumbers.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handleCategoryChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const category = event.target.value;
        if (category === "All Categories") {
            setSelectedCategory("");
        } else {
            setSelectedCategory(category);
        }
        setCurrentPage(1); // Reset to first page on category change
    };

    // pagination ended

    const [addToCart, { data, isError, isSuccess }] =
        useAddPlantToCartMutation();

    // console.log(data);

    const handleAddToCart = async (plant: Plant) => {
        const plantDetails = {
            plantId: plant._id,
            title: plant.title,
            image: plant.image,
            price: plant.price,
            rating: plant.rating,
            quantity: 1,
            categoryName: plant.categoryName,
            description: plant.description,
            isCheckout: false,
        };

        // console.log(plantDetails);

        if(plant?.quantity <= 1) {
            toast.error('Plant is not in stock!')
        }
        else {
            addToCart(plantDetails);
        toast.success(`${plant?.title}, added to the cart`);
        }
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="max-w-screen-2xl mx-auto mb-24">
            <div>
                <SearchBar />
            </div>
            <div className="mb-12">
                <Heading>Uncover the Wonders of Our Plant Collection</Heading>
                <SubHeading>
                    Dive into our vibrant selection of plants and transform your
                    space into a lush paradise.
                </SubHeading>
            </div>
            <div>
                <div className="mb-8 flex justify-end">
                    <select
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        className="select select-bordered w-full max-w-xs"
                    >
                        <option defaultValue={"All Categories"}>
                            All Categories
                        </option>
                        <option>Indoor Plants</option>
                        <option>Outdoor Plants</option>
                        <option>Succulents</option>
                        <option>Cacti</option>
                        <option>Flowering Plants</option>
                        <option>Ornamental Grasses</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-5">
                {currentPlants?.map((plant: Plant) => (
                    <div key={plant?._id}>
                        <div className="card bg-backgroundLightGreen shadow-md">
                            <div className="card-body">
                                <h2 className="card-title text-textGreen">
                                    {plant?.title}
                                </h2>
                                <p>
                                    <span className="font-semibold text-textGreen">
                                        Price:{" "}
                                    </span>{" "}
                                    {plant?.price}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="font-semibold text-textGreen">
                                        Rating:{" "}
                                    </span>{" "}
                                    <Rating
                                        style={{ maxWidth: 150 }}
                                        value={Number(plant?.rating)}
                                        readOnly={true}
                                        itemStyles={myStyles}
                                    />
                                </div>
                                <div
                                    className="mt-4"
                                    onClick={() => handleAddToCart(plant)}
                                >
                                    <ButtonPrimary>Add to Cart</ButtonPrimary>
                                </div>
                            </div>
                            <figure>
                                <Link to={`/plantDetails/${plant?._id}`}>
                                    <img src={plant?.image} alt="" />
                                </Link>
                            </figure>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            {plants?.data.length > plantsPerPage && (
                <div>
                    <ul className="flex items-center gap-10 text-xl font-semibold justify-center mt-10">
                        <button className="btn-5">
                            <MdSkipPrevious
                                onClick={handlePreviousClick}
                                className="text-3xl border border-royalBlue rounded-full p-[2px] hover:bg-royalBlue hover:text-white"
                            />
                        </button>
                        {currentPage !== 1 && pageNumbers.length > 7 && (
                            <>
                                <li key={1}>
                                    <button
                                        onClick={() => paginate(1)}
                                        className={
                                            currentPage === 1
                                                ? "bg-royalBlue text-white px-2 py-1 rounded-md -translate-y-1 shadow-lg transition-all duration-400 ease-in-out"
                                                : ""
                                        }
                                    >
                                        1
                                    </button>
                                </li>
                                <li>...</li>
                            </>
                        )}
                        {pageNumbers
                            .slice(
                                currentPage > 1 && pageNumbers.length > 7
                                    ? currentPage - 2
                                    : 0,
                                currentPage + 5
                            )
                            .map((number) => (
                                <li key={number}>
                                    <button
                                        onClick={() => paginate(number)}
                                        className={
                                            currentPage === number
                                                ? "bg-royalBlue text-white px-2 py-1 rounded-md -translate-y-1 shadow-lg transition-all duration-400 ease-in-out"
                                                : ""
                                        }
                                    >
                                        {number}
                                    </button>
                                </li>
                            ))}
                        {currentPage <= pageNumbers.length - 6 && (
                            <>
                                <li>...</li>
                                <li key={pageNumbers.length}>
                                    <button
                                        onClick={() =>
                                            paginate(pageNumbers.length)
                                        }
                                        className={
                                            currentPage === pageNumbers.length
                                                ? "bg-royalBlue text-white px-2 py-1 rounded-md -translate-y-1 shadow-lg transition-all duration-400 ease-in-out"
                                                : ""
                                        }
                                    >
                                        {pageNumbers.length}
                                    </button>
                                </li>
                            </>
                        )}
                        <button>
                            <MdSkipNext
                                onClick={handleNextClick}
                                className="text-3xl border border-royalBlue rounded-full p-[2px] hover:bg-royalBlue hover:text-white"
                            />
                        </button>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default AllPlants;
