import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    // use a custom hook
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === "popular");
    return (
        <section className="mb-12 max-w-5xl mx-auto">
            <SectionTitle
                heading="From Our Menu"
                subHeading="Popular Items"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 font-bold gap-10">
                {/* show the card and the map section */}
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
                <button className="btn btn-outline border-0 border-b-4 mt-4">
                    View Full Menu
                </button>
            </div>
        </section>
    );
};

export default PopularMenu;