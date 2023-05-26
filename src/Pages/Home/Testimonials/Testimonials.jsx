import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

import { FaQuoteLeft } from "react-icons/fa";
const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    // load the data from json file
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="my-20 max-w-5xl mx-auto">
            <SectionTitle
                heading={"Testimonials"}
                subHeading={"What Our Client Say"}
            ></SectionTitle>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper">
                {/* map and show the card section */}
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div
                            className="my-16 mx-24 flex flex-col items-center font-bold">
                            {/* rating start */}
                            <Rating
                                style=
                                {
                                    { maxWidth: 180 }
                                }
                                value={review.rating}
                                readOnly
                            />
                            <div className="m-6">
                                <FaQuoteLeft className="text-9xl"></FaQuoteLeft>
                            </div>
                            {/* rating end */}
                            <p className="py-8 text-center">
                                {review.details}
                            </p>
                            <h3 className="text-2xl text-orange-400 uppercase">
                                {review.name}
                            </h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;