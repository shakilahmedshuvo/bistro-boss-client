import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

// TODO: implement pagination here on this page
const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleAddToCart = item => {
        console.log(item);
        if (user) {
            fetch('http://localhost:5000/carts')
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your work has been saved',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login to Order The Food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            })
        }
    }
    return (
        <div className="max-w-5xl mx-auto">
            <figure className="px-10 pt-10 bg-orange-50 rounded-xl">
                <img
                    className="overscroll-x-none"
                    src={image}
                    alt="Shoes"
                />
                <p className="w-[20%] my-2 p-2 rounded-md bg-slate-900 text-white">
                    ${price}
                </p>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">
                    {name}
                </h2>
                <p>
                    {recipe}
                </p>
                <div className="card-actions">
                    <button
                        onClick={() => handleAddToCart(item)}
                        className="btn bg-orange-100 border-0 border-orange-500 px-8 border-b-4 uppercase text-orange-500">
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;