import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const Main = () => {
    // login page without header and footer
    const location = useLocation();
    // console.log(location);
    // condition rendering function
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp');
    return (
        <div>
            {/* use condition rendering for login page no header footer */}
            {
                noHeaderFooter ||
                < NavBar ></NavBar>
            }
            <Outlet></Outlet>
            {
                noHeaderFooter ||
                <Footer></Footer>
            }
        </div >
    );
};

export default Main;