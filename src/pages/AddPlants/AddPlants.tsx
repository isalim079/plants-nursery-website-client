import { RiArrowRightUpFill } from "react-icons/ri";
import Heading from "../../components/Heading/Heading";
import { useForm } from "react-hook-form";
import axiosPublic from "../../components/axiosPublic";
import { useAddPlantsMutation } from "../../redux/api/api";
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

const AddPlants = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Plant>();

    const [addPlantsData, { data, isError, isSuccess }] =
        useAddPlantsMutation();

    const onSubmit = async (data: Plant) => {
        const imageFile = { image: data.image[0] };

        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data",
            },
        });

        if (res.data.success) {
            const plantsData = {
                title: data.title,
                image: res.data.data.display_url,
                price: data.price,
                rating: data.rating,
                quantity: Number(data.quantity),
                categoryName: data.categoryName,
                description: data.description,
            };

            console.log(plantsData);

            addPlantsData(plantsData);
            toast.success("Plants updated successfully");
        }
    };

    return (
        <div>
            <div className="max-w-screen-2xl mx-auto my-24 p-6 bg-white rounded-md shadow-md ">
                <div className="mb-8">
                    <Heading>Add Plant</Heading>
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
                            placeholder="Enter Plant Name"
                            className="w-full p-2 border rounded-md"
                            {...register("title", { required: true })}
                        />
                    </div>

                    <div className="flex gap-5 flex-col md:flex-row">
                        <div className="mb-4 flex-1">
                            <label className="block text-gray-600 text-sm font-semibold mb-2">
                                Plant Category
                            </label>
                            <select
                                className="w-full p-2 border rounded-md"
                                {...register("categoryName", {
                                    required: true,
                                })}
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
                                type="file"
                                className="w-full p-2 border rounded-md"
                                {...register("image", { required: true })}
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
                                step="any"
                                type="number"
                                className="w-full p-2 border rounded-md"
                                {...register("rating", { required: true })}
                            />
                        </div>
                        <div className="mb-4 flex-1">
                            <label className="block text-gray-600 text-sm font-semibold mb-2">
                                Price
                            </label>
                            <input
                                placeholder="$100"
                                type="text"
                                className="w-full p-2 border rounded-md"
                                {...register("price", { required: true })}
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
                            className="w-full p-2 border rounded-md"
                            {...register("quantity", { required: true })}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-semibold mb-2">
                            Description
                        </label>
                        <input
                            type="text"
                            placeholder="Description"
                            className="w-full p-2 border rounded-md"
                            {...register("description", { required: true })}
                        />
                    </div>

                    <div className="flex justify-between">
                        <div>
                            <p className="mb-2 text-[#da5656]">
                                * All fields are required
                            </p>
                            <button
                                type="submit"
                                className="border px-3 py-2 border-textGreen/50 text-textGreen rounded-md shadow-md cursor-pointer  hover:bg-textGreen hover:text-[#fff] transition duration-200 ease-in-out"
                            >
                                <span className="flex items-center gap-2">
                                    Add Plants
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

export default AddPlants;
