import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item text-white pt-8 my-20">
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
                    <button className="btn btn-outline border-white border-2 text-white hover:bg-white hover:text-black hover:border-0">
                        Order Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Featured;