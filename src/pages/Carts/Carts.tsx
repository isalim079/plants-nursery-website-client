/* eslint-disable @typescript-eslint/no-explicit-any */
import ButtonPrimary from "../../components/Button/ButtonPrimary";
import Loading from "../../components/Loading/Loading";
import { useGetCartItemsQuery } from "../../redux/api/api";

const Carts = () => {
    const { data: cartItems, isLoading } = useGetCartItemsQuery({});

    // console.log(cartItems);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="max-w-screen-2xl mx-auto my-24">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-center">
                            <th>#</th>
                            <th>Plant Name</th>
                            <th>Price</th>
                            <th>Category Name</th>
                            <th><ButtonPrimary>Checkout</ButtonPrimary></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems?.data?.map((item: any, index: number) => (
                            <tr key={index} className="text-center">
                                <th>{index + 1}</th>
                                <td>{item?.title}</td>
                                <td>{item?.price}</td>
                                <td>{item?.categoryName}</td>
                                <td>{item?.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Carts;
