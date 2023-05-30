import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from 'react-icons/fa';
import Swal from "sweetalert2";

const MyCart = () => {
    const [cart, refetch] = useCart();
    // console.log(cart);
    // get the total price function
    const total = cart.reduce((sum, item) => item.price + sum, 0);

    // handleDelete function
    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE',

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            // refetch the data
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div className="w-full">
            <Helmet>
                <title>
                    BISTRO | My Cart
                </title>
            </Helmet>
            <div className="uppercase font-semibold flex justify-evenly items-center">
                <h3 className="text-3xl">
                    Total Items: {cart.length}
                </h3>
                <h3 className="text-3xl">
                    Total Price: ${total}
                </h3>
                <button className="btn  btn-warning btn-sm">
                    Pay
                </button>
            </div>
            {/* table start */}
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>
                                Food
                            </th>
                            <th>
                                Item Name
                            </th>
                            <th>
                                Price
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img
                                                src={item.image}
                                                alt="Food Image" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td className="text-end">
                                    ${item.price}
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(item)}
                                        className="btn btn-ghost bg-red-700">
                                        <FaTrashAlt className="text-white"></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;