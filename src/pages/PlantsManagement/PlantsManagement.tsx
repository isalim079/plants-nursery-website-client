/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import ButtonPrimary from "../../components/Button/ButtonPrimary";
import Heading from "../../components/Heading/Heading";
import Loading from "../../components/Loading/Loading";
import {
    useDeletePlantsMutation,
    useGetPlantsQuery,
} from "../../redux/api/api";
import Swal from "sweetalert2";
import PlantsUpdateForm from "../PlantsUpdateForm/PlantsUpdateForm";
import { useRef, useState } from "react";
import CategoryForm from "../CategoryForm/CategoryForm";



const PlantsManagement = () => {



    const { data: plants, isLoading } = useGetPlantsQuery({});

    const [deletePlant] = useDeletePlantsMutation();

    const [plantInfo, setPlantInfo] = useState("");

    const dialogRef = useRef<HTMLDialogElement | null>(null);

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
                deletePlant(item?._id);

                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                });
            }
        });
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div>
            <div className="max-w-screen-2xl mx-auto my-24 px-5">
                <div className="mb-12">
                    <Heading>Manage your nursery</Heading>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="">
                                <th>#</th>
                                <th>Plant Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Category Name</th>
                                <th>Quantity</th>
                                <th className="space-x-2 flex">
                                    <Link to={"/addPlants"}>
                                        <ButtonPrimary>
                                            Add Plants
                                        </ButtonPrimary>
                                    </Link>
                                    <div>
                                        <div
                                            className=""
                                            onClick={() => {
                                                (
                                                    document.getElementById(
                                                        "my_modal_6"
                                                    ) as HTMLDialogElement
                                                )?.showModal();
                                            }}
                                        >
                                            <ButtonPrimary>
                                                Add Categories
                                            </ButtonPrimary>
                                        </div>
                                        <dialog
                                            ref={dialogRef}
                                            id="my_modal_6"
                                            className="modal modal-bottom sm:modal-middle"
                                        >
                                            <div className="modal-box">
                                                <CategoryForm />
                                                <div className="modal-action">
                                                    <form method="dialog">
                                                        <button className="btn">
                                                            Close
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </dialog>
                                    </div>


                                    <div>
                                       
                                            <Link to={'/manageCategories'}>
                                            <ButtonPrimary>
                                                Manage Categories
                                            </ButtonPrimary>
                                            </Link>
                                       
                                       
                                    </div>

                                     

                                </th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {plants?.data?.map((item: any, index: number) => (
                                <tr key={index} className="">
                                    <th>{index + 1}</th>
                                    <td>{item?.title}</td>
                                    <td>
                                        <img
                                            src={item?.image}
                                            className="w-16 rounded-md"
                                            alt=""
                                        />
                                    </td>
                                    <td>{item?.price}</td>
                                    <td>{item?.categoryName}</td>
                                    <td>{item?.quantity}</td>
                                    <td>
                                        <div className="flex gap-4">
                                            {/* <div>
                                                <Link
                                                    to={`/plantsUpdateForm/${item?._id}`}
                                                >
                                                    <ButtonPrimary>
                                                        Update
                                                    </ButtonPrimary>
                                                </Link>
                                            </div> */}

                                            <div
                                                className=""
                                                onClick={() => {
                                                    (
                                                        document.getElementById(
                                                            "my_modal_5"
                                                        ) as HTMLDialogElement
                                                    )?.showModal();
                                                    setPlantInfo(item?._id);
                                                }}
                                            >
                                                <ButtonPrimary>
                                                    Update
                                                </ButtonPrimary>
                                            </div>
                                            <dialog
                                                ref={dialogRef}
                                                id="my_modal_5"
                                                className="modal modal-bottom sm:modal-middle"
                                            >
                                                <div className="modal-box">
                                                    <PlantsUpdateForm
                                                        plantInfo={plantInfo}
                                                    />
                                                    <div className="modal-action">
                                                        <form method="dialog">
                                                            <button className="btn">
                                                                Close
                                                            </button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </dialog>

                                            <div
                                                onClick={() =>
                                                    handleDelete(item)
                                                }
                                            >
                                                <ButtonPrimary>
                                                    Delete
                                                </ButtonPrimary>
                                            </div>
                                        </div>
                                    </td>
                                    
                                </tr>
                            ))}
                           
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PlantsManagement;
