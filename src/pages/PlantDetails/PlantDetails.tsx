import { useParams } from "react-router-dom";
import { useGetPlantByIdQuery } from "../../redux/api/api";
import ButtonPrimary from "../../components/Button/ButtonPrimary";
import Heading from "../../components/Heading/Heading";

const PlantDetails = () => {
    const { id } = useParams<{ id: string }>();
    const { data: plant, isLoading } = useGetPlantByIdQuery(id);

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
        <div className="max-w-screen-2xl mx-auto my-24">
            <div className="mb-12">
                <Heading>
                    Your plant description!
                </Heading>
            </div>
            <div className="card card-compact w-1/2 mx-auto bg-backgroundLightGreen shadow-xl">
                <figure>
                    <img
                        
                        src={plant?.data?.image}
                        alt=""
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{plant?.data?.title}</h2>
                    <p className="text-justify">{plant?.data?.description}</p>
                    <div className="card-actions justify-end">
                        <ButtonPrimary>
                            Add To Cart
                        </ButtonPrimary>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlantDetails;
