
const MenuItem = ({ item }) => {

    const { name, image, price, recipe } = item;
    console.log(item);

    return (
        <div>
<img src={image} alt="" />
        </div>
    );
};

export default MenuItem;