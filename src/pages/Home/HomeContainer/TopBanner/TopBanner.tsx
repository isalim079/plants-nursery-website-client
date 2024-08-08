import { useEffect, useState } from "react";
import axiosPublic from "../../../../components/axiosPublic";
import ButtonPrimary from "../../../../components/Button/ButtonPrimary";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

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
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {plantData.map((plant, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col md:flex-row justify-around items-center w-full bg-backgroundLightGreen py-24 rounded-b-2xl shadow-md text-textGreen px-4">
                            <div>
                                <h1 className="font-playWrite font-bold text-5xl mb-6">
                                    {plant?.title}
                                </h1>
                                <p className="font-playWrite text-lg mb-6">
                                    {plant?.subtitle}
                                </p>
                                <ButtonPrimary>See all plants</ButtonPrimary>
                            </div>
                            <div className="md:w-[20%] p-4 lg:p-0">
                                <img
                                    className=" rounded-3xl shadow-lg"
                                    src={plant?.image}
                                    alt=""
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TopBanner;
