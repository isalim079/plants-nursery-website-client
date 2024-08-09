import { useForm } from "react-hook-form";
import Heading from "../../components/Heading/Heading";
import { RiArrowRightUpFill } from "react-icons/ri";
import axiosPublic from "../../components/axiosPublic";
import { useAddCategoriesMutation } from "../../redux/api/api";
import toast from "react-hot-toast";

type PlantCategory = {
    categoryName: string;
    priceRange: string;
    image: string;
    description: string;
};

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const CategoryForm = () => {
    const { register, handleSubmit } = useForm<PlantCategory>();

    const [addCategories] = useAddCategoriesMutation();

    const onSubmit = async (data: PlantCategory) => {
        const imageFile = { image: data.image[0] };

        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data",
            },
        });

        if (res.data.success) {
            const plantCategories = {
                categoryName: data.categoryName,
                priceRange: data.priceRange,
                image: res.data.data.display_url,
                description: data.description,
            };

            // console.log(plantCategories);

            addCategories(plantCategories);
            toast.success("Category created successfully");
        }
    };

    return (
        <div>
            <div className="max-w-screen-2xl mx-auto my-24 p-6 bg-white rounded-md shadow-md ">
                <div className="mb-8">
                    <Heading>Add Categories</Heading>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="text-textGreen"
                >
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-semibold mb-2">
                            Category Name *
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Category Name"
                            className="w-full p-2 border rounded-md"
                            {...register("categoryName", { required: true })}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-semibold mb-2">
                            Price Range *
                        </label>
                        <input
                            type="text"
                            placeholder="$10 - $40"
                            className="w-full p-2 border rounded-md"
                            {...register("priceRange", { required: true })}
                        />
                    </div>

                    <div className="">
                        <label className="pr-4 text-gray-600 text-sm font-semibold mb-2">
                            Plant Image *
                        </label>
                        <input
                            type="file"
                            className=" p-2 border rounded-md my-4"
                            {...register("image", { required: true })}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-semibold mb-2">
                            Description *
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
                            <button
                                type="submit"
                                className="border px-3 py-2 border-textGreen/50 text-textGreen rounded-md shadow-md cursor-pointer  hover:bg-textGreen hover:text-[#fff] transition duration-200 ease-in-out"
                            >
                                <span className="flex items-center gap-2">
                                    Add Categories
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

export default CategoryForm;
