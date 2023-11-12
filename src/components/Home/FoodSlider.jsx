import SectionHeading from "../SectionHeading";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//import images
import img1 from "../../assets/home/slide1.jpg";
import img2 from "../../assets/home/slide2.jpg";
import img3 from "../../assets/home/slide3.jpg";
import img4 from "../../assets/home/slide4.jpg";
import img5 from "../../assets/home/slide5.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const FoodSlider = () => {
  return (
    <div className="  max-w-7xl mx-auto mt-16 ">
      <SectionHeading
        priamary={"order online"}
        secondary={"---From 11:00am to 10:00pm---"}
      ></SectionHeading>

      <div className="mb-32">
        <Swiper
          slidesPerView={4}
          spaceBetween={"24px"}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <img className="w-full" src={img1} alt="" />{" "}
            <p className="font-cinzel text-white  text-3xl text-center -mt-10">
              salads
            </p>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img className="w-full" src={img2} alt="" />{" "}
            <p className="font-cinzel text-white  text-3xl text-center -mt-10">
              soups
            </p>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img className="w-full" src={img3} alt="" />{" "}
            <p className="font-cinzel text-white  text-3xl text-center -mt-10">
              pizzas
            </p>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img className="w-full" src={img4} alt="" />{" "}
            <p className="font-cinzel text-white  text-3xl text-center -mt-10">
              desserts
            </p>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img className="w-full" src={img5} alt="" />{" "}
            <p className="font-cinzel text-white  text-3xl text-center -mt-10">
              vegitables
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default FoodSlider;
