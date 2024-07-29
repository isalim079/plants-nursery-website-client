/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    useGetPlantByIdQuery,
    useUpdatePlantsDataMutation,
} from "../../redux/api/api";
import { useForm } from "react-hook-form";
import Heading from "../../components/Heading/Heading";
import { RiArrowRightUpFill } from "react-icons/ri";
import axiosPublic from "../../components/axiosPublic";
import toast from "react-hot-toast";



type Plant = {
    title: string;
    image: FileList;
    price: string;
    rating: number;
    quantity: number;
    categoryName: string;
    description: string;
};

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const PlantsUpdateForm = ({plantInfo}) => {
    console.log(plantInfo);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Plant>();
    const { data: plant, isLoading } = useGetPlantByIdQuery(plantInfo);

    const [updatePlantsData, { data, isError, isSuccess }] =
        useUpdatePlantsDataMutation();

    const onSubmit = async (data: Plant) => {
        let imageUrl = plant?.data?.image;

        try {
            const imageFile = { image: data.image[0] };

            const res = await axiosPublic.post(image_hosting_api, imageFile, {
                headers: {
                    "content-type": "multipart/form-data",
                },
            });
            if (res.data.success) {
                imageUrl = res.data.data.display_url;
            }
        } catch (error) {
            console.error("Image upload failed", error);
        }

        const plantsData = {
            title: data.title ? data.title : plant?.data?.title,
            image: imageUrl,
            price: data.price ? data.price : plant?.data?.price,
            rating: data.rating ? data.rating : plant?.data?.rating,
            quantity: Number(
                data.quantity ? data.quantity : plant?.data?.quantity
            ),
            categoryName: data.categoryName
                ? data.categoryName
                : plant?.data?.categoryName,
            description: data.description
                ? data.description
                : plant?.data?.description,
        };

        // console.log(plantsData);

        updatePlantsData({ id: plantInfo, data: plantsData });
        toast.success("Plants updated successfully");
    };

    return (
        <div>
            <div className="max-w-screen-2xl mx-auto my-24 p-6 bg-white rounded-md shadow-md ">
                <div className="mb-8">
                    <Heading>Update Plant</Heading>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="text-textGreen"
                >
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-semibold mb-2">
                            Plant Name
                        </label>
                        <input
                            type="text"
                            defaultValue={plant?.data?.title}
                            placeholder="Enter Plant Name"
                            className="w-full p-2 border rounded-md"
                            {...register("title")}
                        />
                    </div>

                    <div className="flex gap-5 flex-col md:flex-row">
                        <div className="mb-4 flex-1">
                            <label className="block text-gray-600 text-sm font-semibold mb-2">
                                Plant Category
                            </label>
                            <select
                                defaultChecked={plant?.data?.categoryName}
                                defaultValue={plant?.data?.categoryName}
                                className="w-full p-2 border rounded-md"
                                {...register("categoryName")}
                            >
                                <option value="">Select</option>
                                <option value="Indoor Plants">
                                    Indoor Plants
                                </option>
                                <option value="Outdoor Plants">
                                    Outdoor Plants
                                </option>
                                <option value="Succulents">Succulents</option>
                                <option value="Cacti">Cacti</option>
                                <option value="Flowering Plants">
                                    Flowering Plants
                                </option>
                                <option value="Ornamental Grasses">
                                    Ornamental Grasses
                                </option>
                            </select>
                        </div>

                        <div className="mb-4  flex-1">
                            <label className=" text-gray-600 text-sm font-semibold mb-2">
                                Plant Image
                            </label>
                            <input
                                defaultValue={plant?.data?.image}
                                type="file"
                                className="w-full p-2 border rounded-md"
                                {...register("image")}
                            />
                        </div>
                    </div>

                    <div className="flex gap-5 md:flex-row flex-col">
                        <div className="mb-4 flex-1">
                            <label className="block text-gray-600 text-sm font-semibold mb-2">
                                Rating
                            </label>
                            <input
                                placeholder="Rating"
                                defaultValue={plant?.data?.rating}
                                step="any"
                                type="number"
                                className="w-full p-2 border rounded-md"
                                {...register("rating")}
                            />
                        </div>
                        <div className="mb-4 flex-1">
                            <label className="block text-gray-600 text-sm font-semibold mb-2">
                                Price
                            </label>
                            <input
                                placeholder="Price"
                                defaultValue={plant?.data?.price}
                                type="text"
                                className="w-full p-2 border rounded-md"
                                {...register("price")}
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-semibold mb-2">
                            Quantity
                        </label>
                        <input
                            type="number"
                            placeholder="Quantity"
                            defaultValue={plant?.data?.quantity}
                            className="w-full p-2 border rounded-md"
                            {...register("quantity")}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-semibold mb-2">
                            Description
                        </label>
                        <input
                            type="text"
                            placeholder="Description"
                            defaultValue={plant?.data?.description}
                            className="w-full p-2 border rounded-md"
                            {...register("description")}
                        />
                    </div>

                    <div className="flex justify-between">
                        <div>
                            <button
                                type="submit"
                                className="border px-3 py-2 border-textGreen/50 text-textGreen rounded-md shadow-md cursor-pointer  hover:bg-textGreen hover:text-[#fff] transition duration-200 ease-in-out"
                            >
                                <span className="flex items-center gap-2">
                                    Update Plants
                                    <RiArrowRightUpFill className="text-xl" />
                                </span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PlantsUpdateForm;
