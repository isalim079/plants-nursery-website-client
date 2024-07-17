/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import ButtonPrimary from "../../components/Button/ButtonPrimary";
import Heading from "../../components/Heading/Heading";
import Loading from "../../components/Loading/Loading";
import { useGetPlantsQuery } from "../../redux/api/api";

const PlantsManagement = () => {
    const { data: plants, isLoading } = useGetPlantsQuery({});

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
                                <th>
                                    <ButtonPrimary>Add Plants</ButtonPrimary>
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
                                            <div>
                                                <Link to={`/plantsUpdateForm/${item?._id}`}>
                                                    <ButtonPrimary>
                                                        Update
                                                    </ButtonPrimary>
                                                </Link>
                                            </div>
                                            <div>
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
