import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaUsers } from 'react-icons/fa';
import { TiThMenu, TiShoppingCart } from 'react-icons/Ti';
import useCart from "../hooks/useCart";
import { useId } from "react";
const Dashboard = () => {
    const [cart] = useCart();

    // TODO: load data from the server to have dynamic isAdmin based on Data
    const isAdmin = true;
    return (
        <div className="drawer drawer-mobile">
            <input
                id="my-drawer-2"
                type="checkbox"
                className="drawer-toggle" />
            <div
                className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label
                    htmlFor="my-drawer-2"
                    className="btn btn-primary drawer-button lg:hidden">
                    Open drawer
                </label>
            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label
                    htmlFor="my-drawer-2"
                    className="drawer-overlay">

                </label>
                <ul className="menu p-4 w-80">
                    {/*  admin and user */}
                    {
                        isAdmin ?
                            <>
                                {/* admin panel section start */}
                                <li>
                                    <NavLink>
                                        <FaHome></FaHome> Admin Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink>
                                        <FaUtensils></FaUtensils> Add Items
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink>
                                        <FaWallet></FaWallet> Manage Items
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink>
                                        <FaWallet></FaWallet> Manage Bookings
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="allUsers">
                                        <FaUsers></FaUsers> All Users
                                    </NavLink>
                                </li>
                                {/* admin panel section end */}
                            </>
                            :
                            <>
                                {/* user panel section start */}
                                <li>
                                    <NavLink>
                                        <FaHome></FaHome> User Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink>
                                        <FaCalendarAlt></FaCalendarAlt> Reservations
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink>
                                        <FaWallet></FaWallet> Payment History
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/myCart">
                                        <FaShoppingCart></FaShoppingCart> My Cart
                                        <span
                                            className="badge badge-secondary">
                                            <p>
                                                +
                                            </p>
                                            {
                                                cart?.length || 0
                                            }
                                        </span>
                                    </NavLink>
                                </li>
                                {/* user panel section end */}
                            </>
                    }

                    {/* divider start */}
                    <div className="divider"></div>
                    <li>
                        <NavLink
                            to="/">
                            <FaHome></FaHome> Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu">
                            <TiThMenu></TiThMenu> Our Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad">
                            <TiShoppingCart></TiShoppingCart> Order Food
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;