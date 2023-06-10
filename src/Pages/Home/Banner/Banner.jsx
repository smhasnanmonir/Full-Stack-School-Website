import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
const Banner = () => {
  const commonSlider = (
    <>
      <div className="space-y-3 max-w-[450px] text-white">
        <h1 className="text-5xl ">Book A class in Summer Film School Now!</h1>
        <h1 className="text-2xl font-bold ">
          Want to be a film maker or have interest in acting?
        </h1>
        <h1 className="text-xl">We have a good news for you.</h1>
        <button className="btn btn-outline btn-info">Book Class Now</button>
      </div>
    </>
  );

  return (
    <div className="banner-bg text-white">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper text-black"
      >
        <SwiperSlide className="bg-[url('https://i.ibb.co/n6Wg6KD/photo-2023-06-10-22-54-48.jpg')] bg-no-repeat bg-cover md:p-[150px]">
          {commonSlider}
        </SwiperSlide>
        <SwiperSlide className="md:p-[150px] bg-no-repeat bg-cover bg-[url('https://i.ibb.co/7KRjZWj/photo-2023-06-10-22-54-46.jpg')]">
          {commonSlider}
        </SwiperSlide>
        <SwiperSlide className="md:p-[150px] bg-no-repeat bg-cover bg-[url('https://i.ibb.co/YfWFqyr/photo-2023-06-10-22-54-45.jpg')]">
          {commonSlider}
        </SwiperSlide>
        <SwiperSlide className="md:p-[150px] bg-no-repeat bg-cover bg-[url('https://i.ibb.co/T0SKwmz/photo-2023-06-10-22-54-44.jpg')]">
          {commonSlider}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
