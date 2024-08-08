/* eslint-disable @typescript-eslint/no-explicit-any */
import ButtonPrimary from "../../components/Button/ButtonPrimary";
import Loading from "../../components/Loading/Loading";
import { useGetCartItemsQuery } from "../../redux/api/api";
import Swal from "sweetalert2";

const Carts = () => {
    const { data: cartItems, isLoading } = useGetCartItemsQuery({});

    const totalPrice = cartItems?.data?.reduce((total: any, plant: any) => {
        const price = parseFloat(plant.price.replace("$", ""));
        return total + price * plant.quantity;
    }, 0);

    const handleCheckout = () => {
        Swal.fire({
            title: `Total Price: $${totalPrice}`,
            text: "Payment method: COD",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm Order!",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Confirmed!",
                    text: "Your plant order confirmed.",
                    icon: "success",
                });
            }
        });
    };

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
                            <th>
                                <div onClick={() => handleCheckout()}>
                                    <ButtonPrimary>Checkout</ButtonPrimary>
                                </div>
                            </th>
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
