import { useEffect, useState } from "react";
import axiosPublic from "../../../../components/axiosPublic";
import ButtonPrimary from "../../../../components/Button/ButtonPrimary";
import Heading from "../../../../components/Heading/Heading";
import SubHeading from "../../../../components/SubHeading/SubHeading";

interface PlantCategory {
    categoryName: string;
    priceRange: string;
    image: string;
    description: string;
}

const CategorySection = () => {
    const [plantCategory, setPlantCategory] = useState<PlantCategory[]>([]);

    useEffect(() => {
        const getPlantCategory = async () => {
            axiosPublic.get("/plantCategories").then((res) => {
                setPlantCategory(res.data.data);
            });
        };
        getPlantCategory();
    }, []);

    return (
        <div className="max-w-screen-2xl mx-auto mb-24">
            <div className="mb-12">
                <Heading>Explore Our Plant Categories</Heading>
                <SubHeading>
                    Discover a Wide Variety of Plants to Suit Every Space and
                    Style
                </SubHeading>
            </div>
            <div className="grid grid-cols-4 gap-7">
                {plantCategory.map((category, index) => (
                    <div key={index} className="card bg-base-100 shadow-md">
                        <figure className="">
                            <img
                                src={category?.image}
                                alt="Shoes"
                                className="rounded-t-xl"
                            />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-textGreen">
                                {category?.categoryName}
                            </h2>
                            <p>{category?.description}</p>
                            <p className="font-semibold">{category?.priceRange}</p>
                            <div className="card-actions">
                                <ButtonPrimary>Show All</ButtonPrimary>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategorySection;
