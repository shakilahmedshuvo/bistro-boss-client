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
            <div className="grid md:grid-cols-2 font-bold gap-10 mt-16">
                {/* show the card and the map section and output in the menu category */}
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;