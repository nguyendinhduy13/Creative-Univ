import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Job = () => {
  return (
    <section className="mt-20 mr-3 ml-3">
    <Swiper
      className="mt-[50px] h-[250px]"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={2}
      autoplay={{ delay: 1000 }}
      pagination={{ clickable: true, }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide className="flex justify-center">
      <div className="bg-gray-300 h-[190px] w-[190px] ">
        <div className="h-[90px]">
         <img src="https://i.imgur.com/timpSoQ.jpg" alt="img" />
        </div>
        <div className="bg-yellow-main h-[90px] mt-2 flex slanted-div flex-col items-center">
          <p className="mt-3 font-head text-[14px] font-medium">
            {" "}
            Argency
          </p>
          <p className="mt-0.5 font-body text-10">
            Junior Graphic Design
          </p>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className="flex justify-center">
      <div className="bg-gray-300 h-[190px] w-[190px] ">
        <div className="h-[90px]">
         <img src="https://i.imgur.com/timpSoQ.jpg" alt="img" />
        </div>
        <div className="bg-yellow-main h-[90px] mt-2 flex slanted-div flex-col items-center">
          <p className="mt-3 font-head text-[14px] font-medium">
            {" "}
            Argency
          </p>
          <p className="mt-0.5 font-body text-10">
            Junior Graphic Design
          </p>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className="flex justify-center">
      <div className="bg-gray-300 h-[190px] w-[190px] ">
        <div className="h-[90px]">
         <img src="https://i.imgur.com/timpSoQ.jpg" alt="img" />
        </div>
        <div className="bg-yellow-main h-[90px] mt-2 flex slanted-div flex-col items-center">
          <p className="mt-3 font-head text-[14px] font-medium">
            {" "}
            Argency
          </p>
          <p className="mt-0.5 font-body text-10">
            Junior Graphic Design
          </p>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className="flex justify-center">
      <div className="bg-gray-300 h-[190px] w-[190px] ">
        <div className="h-[90px]">
         <img src="https://i.imgur.com/timpSoQ.jpg" alt="img" />
        </div>
        <div className="bg-yellow-main h-[90px] mt-2 flex slanted-div flex-col items-center">
          <p className="mt-3 font-head text-[14px] font-medium">
            {" "}
            Argency
          </p>
          <p className="mt-0.5 font-body text-10">
            Junior Graphic Design
          </p>
        </div>
      </div>
      </SwiperSlide>
    </Swiper>
    </section>
  );
};

export default Job;
