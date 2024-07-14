
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./topBanner.css";
import { useEffect, useState } from "react";
import axiosPublic from "../../../../components/axiosPublic";
import ButtonPrimary from "../../../../components/Button/ButtonPrimary";

interface PlantData {
    title: string;
    subtitle: string;
    image: string;
}

const TopBanner = () => {
    const [plantData, setPlantData] = useState<PlantData[]>([]);

    useEffect(() => {
        const getPlantData = async () => {
            axiosPublic.get("/topBannerPlantData").then((res) => {
                setPlantData(res.data.data);
            });
        };
        getPlantData();
    }, []);

    // console.log(plantData);

    return (
        <div className="container mx-auto">
            <Carousel autoPlay infiniteLoop swipeable showThumbs={false}>
                {plantData.map((plant, index) => (
                    <div
                        key={index}
                        className="flex justify-around items-center w-full bg-backgroundLightGreen py-24 rounded-b-2xl shadow-md text-textGreen"
                    >
                        <div>
                            <h1 className="font-playWrite font-bold text-5xl mb-6">
                                {plant?.title}
                            </h1>
                            <p className="font-playWrite text-lg mb-6">
                                {plant?.subtitle}
                            </p>
                            <ButtonPrimary>See all plants</ButtonPrimary>
                        </div>
                        <div className="w-[20%]">
                            <img
                                className=" rounded-3xl shadow-lg"
                                src={plant?.image}
                                alt=""
                            />
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default TopBanner;
