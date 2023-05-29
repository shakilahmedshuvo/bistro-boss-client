import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

// TODO: implement pagination here on this page
const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const { user } = useContext(AuthContext);
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = item => {
        console.log(item);
        if (user && user.email) {
            const cartItem = { menuItemId: _id, name, image, price, email: user.email }
            fetch('http://localhost:5000/carts', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    // refetch the cart update the number of items in the cart
                    refetch();
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Food Added To The Cart',
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
                confirmButtonText: 'Login Now !'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
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