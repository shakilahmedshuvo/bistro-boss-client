import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
    return (
        <div className="pt-8">
            {/* cover img */}
            {
                title &&
                <Cover
                    img={img}
                    title={title}
                ></Cover>
            }
            <div className="grid md:grid-cols-2 font-bold gap-10 my-16 max-w-6xl mx-auto">
                {/* show the card and the map section and output in the menu category */}
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <button className="btn btn-outline border-0 border-b-4 mt-4">
                    Order Now
                </button>
            </Link>
        </div>
    );
};

export default MenuCategory;