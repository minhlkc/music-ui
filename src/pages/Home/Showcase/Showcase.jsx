import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Showcase.scss";

// Import Swiper React components
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Showcase({ data }) {
    return (
        <div className="Showcase">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    prevEl: ".prev-btn",
                    nextEl: ".next-btn",
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                {data?.map((item) => {
                    const key = item?.url.split(".")[3];
                    return (
                        <SwiperSlide key={item.key}>
                            <Link
                                to={
                                    item?.url.includes("playlist")
                                        ? "/playlist/" + key
                                        : `/song/` + key
                                }
                            >
                                <img
                                    title={item.title}
                                    className="Showcase__img"
                                    src={item.thumbnail}
                                    alt=""
                                />
                            </Link>
                        </SwiperSlide>
                    );
                })}
                <div className="prev-btn">
                    <BsChevronLeft className="Showcase__icon-slider" />
                </div>
                <div className="next-btn">
                    <BsChevronRight className="Showcase__icon-slider" />
                </div>
            </Swiper>
        </div>
    );
}
