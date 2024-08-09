/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import axiosPublic from "../../components/axiosPublic";
import ButtonPrimary from "../../components/Button/ButtonPrimary";
import Swal from "sweetalert2";
import { useDeleteCategoriesMutation } from "../../redux/api/api";
import "./manageCategory.css";
import Heading from "../../components/Heading/Heading";

interface PlantCategory {
    categoryName: string;
    priceRange: string;
    image: string;
    description: string;
}

const ManageCategories = () => {
    const [plantCategory, setPlantCategory] = useState<PlantCategory[]>([]);

    useEffect(() => {
        const getPlantCategory = async () => {
            axiosPublic.get("/plantCategories").then((res) => {
                setPlantCategory(res.data.data);
            });
        };
        getPlantCategory();
    }, []);

    const [deletePlantCategory] = useDeleteCategoriesMutation();

    const handleDelete = (item: any) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                deletePlantCategory(item?._id);

                Swal.fire({
                    title: "Deleted!",
                    text: "Your Category has been deleted.",
                    icon: "success",
                }).then(() => {
                    window.location.reload();
                });
            }
        });
    };

    return (
        <div className="max-w-screen-xl mx-auto my-5">
            <div className="my-14">
                <Heading>Manage Categories</Heading>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Category Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {plantCategory?.map((category, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{category?.categoryName}</td>
                                <td>
                                    <div onClick={() => handleDelete(category)}>
                                        <ButtonPrimary>Delete</ButtonPrimary>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageCategories;
