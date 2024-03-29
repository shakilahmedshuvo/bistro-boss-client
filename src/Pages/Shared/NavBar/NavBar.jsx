import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../hooks/useCart";
const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();

    // handleLogOut function
    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.log(error));
    }

    // nav bar function
    const navOptions = <>
        <li>
            <Link to="/">
                Home
            </Link>
        </li>

        <li>
            <Link to="/menu">
                Our Menu
            </Link>
        </li>

        <li>
            <Link to="order/salad">
                Order Food
            </Link>
        </li>
        <li>
            {/* cart */}
            <Link to="/dashboard/myCart">
                <button className="btn bg-transparent border-0 gap-2">
                    <FaShoppingCart></FaShoppingCart>
                    <div className="badge badge-secondary">
                        <p>
                            +
                        </p>
                        {
                            cart?.length || 0
                        }
                    </div>
                </button>
            </Link>
        </li>
        {/* conditional rendering */}
        {
            user ?
                <>
                    {/* tooltip show and the profile picture */}
                    <div
                        className="tooltip tooltip-warning tooltip-bottom flex justify-center items-center font-bold"
                        data-tip={user.displayName}>
                        <img
                            className="w-12 h-12 rounded-full"
                            src=
                            {
                                user?.photoURL
                            }
                            alt="" />
                    </div>
                    <li className="items-center">
                        <Link onClick={handleLogOut} className="btn btn-ghost">
                            Log Out
                        </Link>
                    </li>
                </>
                :
                <>
                    <li className="items-center">
                        <Link className="btn btn-ghost" to="login">
                            Log In
                        </Link>
                    </li>
                </>
        }
    </>

    return (
        <>
            <div className="navbar max-w-screen-xl fixed z-10 bg-opacity-30 bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <Link
                        to="/"
                        className="btn btn-ghost normal-case text-xl">
                        BISTRO BOSS
                        <br />
                        RESTAURANT
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">
                        Get started
                    </a>
                </div>
            </div>
        </>
    );
};

export default NavBar;