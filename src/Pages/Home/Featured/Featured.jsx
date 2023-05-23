import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20 ">
            <div className="bg-slate-500 bg-opacity-40">
                <SectionTitle
                    heading={"Featured Item"}
                    subHeading={"Check it Out"}
                ></SectionTitle>
                <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
                    <div>
                        <img src={featuredImg} alt="" />
                    </div>
                    <div className="md:ml-10">
                        <p>
                            Aug 20, 2029
                        </p>
                        <p className="uppercase">
                            WHERE CAN I GET SOME?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amen consectetur adipisicing elite. Error voluptuary facer, destruct dolores maia.res quod nobs quash quasi. Eacute repellant recusance ad laudanum tempore consecrator consequently omnios ulema maxima tenter.
                        </p>
                        <button className="btn btn-outline border-0 border-b-4 mt-4">
                            Order Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;