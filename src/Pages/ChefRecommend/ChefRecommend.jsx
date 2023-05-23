import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import saladeImg from "../../assets/home/slide5.jpg"

const ChefRecommend = () => {
    return (
        <div className="max-w-5xl mx-auto">
            <div>
                <SectionTitle
                    heading={"CHEF RECOMMENDS"}
                    subHeading={"--- Should Try ---"}
                ></SectionTitle>
            </div>
            {/* card section start */}
            <div className="grid md:grid-cols-3 gap-6">
                <div className="max-w-5xl mx-auto">
                    <figure className="px-10 pt-10 bg-orange-50 rounded-xl">
                        <img
                            className="overscroll-x-none"
                            data-aos="zoom-out-down"
                            src={saladeImg}
                            alt="Shoes"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">
                            Caeser Salad
                        </h2>
                        <p>
                            Lettuce, Eggs, Parmesan Cheese, Chicken
                            <br />
                            Breast Fillets.
                        </p>
                        <div className="card-actions">
                            <button className="btn bg-orange-100 border-0 border-orange-500 px-8 border-b-4 uppercase text-orange-500">
                                add to cart
                            </button>
                        </div>
                    </div>
                </div>
                <div className="max-w-5xl mx-auto">
                    <figure className="px-10 pt-10 bg-orange-50 rounded-xl">
                        <img
                            className="overscroll-x-none"
                            data-aos="zoom-out-down"
                            src={saladeImg}
                            alt="Shoes"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">
                            Caeser Salad
                        </h2>
                        <p>
                            Lettuce, Eggs, Parmesan Cheese, Chicken
                            <br />
                            Breast Fillets.
                        </p>
                        <div className="card-actions">
                            <button className="btn bg-orange-100 border-0 border-orange-500 px-8 border-b-4 uppercase text-orange-500">
                                add to cart
                            </button>
                        </div>
                    </div>
                </div>
                <div className="max-w-5xl mx-auto">
                    <figure className="px-10 pt-10 bg-orange-50 rounded-xl">
                        <img
                            className="overscroll-x-none"
                            data-aos="zoom-out-down"
                            src={saladeImg}
                            alt="Shoes"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">
                            Caeser Salad
                        </h2>
                        <p>
                            Lettuce, Eggs, Parmesan Cheese, Chicken
                            <br />
                            Breast Fillets.
                        </p>
                        <div className="card-actions">
                            <button className="btn bg-orange-100 border-0 border-orange-500 px-8 border-b-4 uppercase text-orange-500">
                                add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefRecommend;