// react helmet async
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
// import img
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";

const Menu = () => {
    // load the data
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === "dessert");
    const soup = menu.filter(item => item.category === "soup");
    const salad = menu.filter(item => item.category === "salad");
    const pizza = menu.filter(item => item.category === "pizza");
    const offered = menu.filter(item => item.category === "offered");
    return (
        <div>
            {/* using helmet async start */}
            <Helmet>
                <title>
                    BISTRO BOSS | MENU
                </title>
            </Helmet>
            {/* using helmet async end */}
            {/* cover img */}
            <Cover
                img={menuImg}
                title={"Our Menu"}
            ></Cover>

            {/* main cover */}
            <SectionTitle
                subHeading={"Don't Miss"}
                heading={"Today's Offer"}
            ></SectionTitle>

            {/* loop and map section start */}

            {/* offered menu items */}
            <MenuCategory
                items={offered}
            ></MenuCategory>

            {/* desserts menu items */}
            <MenuCategory
                items={desserts}
                title={"Dessert"}
                img={dessertImg}
            ></MenuCategory>

            {/* pizza menu items */}
            <MenuCategory
                items={pizza}
                title={"Pizza"}
                img={pizzaImg}
            ></MenuCategory>

            {/* salad menu items */}
            <MenuCategory
                items={salad}
                title={"Salad"}
                img={saladImg}
            ></MenuCategory>

            {/* soup menu items */}
            <MenuCategory
                items={soup}
                title={"Soup"}
                img={soupImg}
            ></MenuCategory>
            
            {/* loop and map section end */}
        </div>
    );
};

export default Menu;