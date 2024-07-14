/* eslint-disable @typescript-eslint/no-unused-vars */

import { useGetPlantsQuery } from "../../../../redux/api/api";
import { Rating, RoundedStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import ButtonPrimary from "../../../../components/Button/ButtonPrimary";
import Heading from "../../../../components/Heading/Heading";
import SubHeading from "../../../../components/SubHeading/SubHeading";

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
        return <p>Loading...</p>;
    }

    return (
        <div className="max-w-screen-2xl mx-auto mb-24">
            <div className="mb-12">
                <Heading>Uncover the Wonders of Our Plant Collection</Heading>
                <SubHeading>Dive into our vibrant selection of plants and transform your space into a lush paradise.</SubHeading>
            </div>
            <div className="grid grid-cols-4 gap-5">
                {plants?.data?.map((plant: Plant) => (
                    <div
                        className="card bg-backgroundLightGreen shadow-md"
                        key={plant?._id}
                    >
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
                            <p className="flex items-center justify-between">
                                <span className="font-semibold text-textGreen">
                                    Rating:{" "}
                                </span>{" "}
                                <Rating
                                    style={{ maxWidth: 150 }}
                                    value={Number(plant?.rating)}
                                    readOnly={true}
                                    itemStyles={myStyles}
                                />
                            </p>
                            <div className="mt-4">
                                <ButtonPrimary>Add to Cart</ButtonPrimary>
                            </div>
                        </div>
                        <figure>
                            <img src={plant?.image} alt="" />
                        </figure>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllPlants;
