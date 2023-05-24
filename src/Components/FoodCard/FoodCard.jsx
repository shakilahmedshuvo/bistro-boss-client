
const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;
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
                    <button className="btn bg-orange-100 border-0 border-orange-500 px-8 border-b-4 uppercase text-orange-500">
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;