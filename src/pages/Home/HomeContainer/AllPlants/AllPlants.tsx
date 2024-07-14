/* eslint-disable @typescript-eslint/no-unused-vars */

import { useGetPlantsQuery } from "../../../../redux/api/api";
import { Rating, RoundedStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import ButtonPrimary from "../../../../components/Button/ButtonPrimary";
import Heading from "../../../../components/Heading/Heading";
import SubHeading from "../../../../components/SubHeading/SubHeading";
import { Link } from "react-router-dom";

type Plant = {
    _id: string;
    title: string;
    image: string;
    price: string;
    rating: number;
    categoryName: string;
};

const myStyles = {
    itemShapes: RoundedStar,
    activeFillColor: "#4A5F4B",
    inactiveFillColor: "#EDF2E6",
    itemStrokeWidth: 2,
};

const AllPlants = () => {
    const { data: plants, isLoading } = useGetPlantsQuery({});

    if (isLoading) {
        return (
            <div className="max-w-screen-2xl mx-auto mb-24">
                <div className="flex justify-center flex-col gap-4">
                    <div className="skeleton h-32 w-full"></div>
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-screen-2xl mx-auto mb-24">
            <div className="mb-12">
                <Heading>Uncover the Wonders of Our Plant Collection</Heading>
                <SubHeading>
                    Dive into our vibrant selection of plants and transform your
                    space into a lush paradise.
                </SubHeading>
            </div>
            <div className="grid grid-cols-4 gap-5">
                {plants?.data?.map((plant: Plant) => (
                    <div key={plant?._id}>
                        <Link to={`/plantDetails/${plant?._id}`}>
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
                                    <div className="mt-4">
                                        <ButtonPrimary>
                                            Add to Cart
                                        </ButtonPrimary>
                                    </div>
                                </div>
                                <figure>
                                    <img src={plant?.image} alt="" />
                                </figure>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllPlants;
