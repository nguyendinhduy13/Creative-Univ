import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SimpleSwiperWithParams = (props) => {
  const { isMobile } = props;
  return (
    <div>
      {isMobile ? (
        <Swiper
          className="mt-5 h-[420px]"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={200}
          slidesPerView={1}
          autoplay={{ delay: 1000 }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide className="flex justify-center">
            <div>
              <div className="flex justify-center h-[300px] w-[271px] ">
                <img src="https://i.imgur.com/4s74ube.png" alt="mentor1" />
              </div>
              <div className="flex flex-col items-center">
                <p className="font-head text-20 font-semibold mt-5">
                  Phạm Minh Hoàng
                </p>
                <p className="font-head text-20 font-medium">Visual Artist</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <div>
              <div className="flex justify-center h-[300px] w-[271px]">
                <img src="https://i.imgur.com/vyb77Ts.png" alt="mentor2" />
              </div>
              <div className="flex flex-col items-center">
                <p className="font-head text-20 font-semibold mt-5">
                  Nguyễn Minh Chính
                </p>
                <p className="font-head text-20 font-medium">Coach & Account</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <div>
              <div className="flex justify-center h-[300px] w-[271px]">
                <img src="https://i.imgur.com/TJEojk3.png" alt="mentor3" />
              </div>
              <div className="flex flex-col items-center">
                <p className="font-head text-20 font-semibold  mt-5">
                  Nguyễn Đình Giang
                </p>
                <p className="font-head text-20 font-medium">Manager</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <div>
              <div className="flex justify-center h-[300px] w-[271px]">
                <img src="https://i.imgur.com/2FHblST.png" alt="mentor4" />
              </div>
              <div className="flex flex-col items-center">
                <p className="font-head text-20 font-semibold mt-5">
                  Phạm Hoàng Long
                </p>
                <p className="font-head text-20 font-medium">
                  Account & Creator
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      ) : (
        <div className="flex justify-center gap-x-[50px]">
          <div>
              <div className="transition ease-in-out delay-150 lg:hover:scale-110 flex justify-center h-[300px] w-[271px] ">
                <img src="https://i.imgur.com/4s74ube.png" alt="mentor1" />
              </div>
              <div className="flex flex-col items-center">
                <p className="font-head text-20 font-semibold mt-10">
                  Phạm Minh Hoàng
                </p>
                <p className="font-head text-20 font-medium">Visual Artist</p>
              </div>
            </div>
          <div>
            <div className="transition ease-in-out delay-150 lg:hover:scale-110 flex justify-center h-[300px] w-[271px]">
              <img src="https://i.imgur.com/vyb77Ts.png" alt="mentor2" />
            </div>
            <div className="flex flex-col items-center">
              <p className="font-head text-20 font-semibold mt-10">
                Nguyễn Minh Chính
              </p>
              <p className="font-head text-20 font-medium">Coach & Account</p>
            </div>
          </div>
          <div>
            <div className="transition ease-in-out delay-150 lg:hover:scale-110 flex justify-center h-[300px] w-[271px]">
              <img src="https://i.imgur.com/TJEojk3.png" alt="mentor3" />
            </div>
            <div className="flex flex-col items-center">
              <p className="font-head text-20 font-semibold  mt-10">
                Nguyễn Đình Giang
              </p>
              <p className="font-head text-20 font-medium">Manager</p>
            </div>
          </div>
          <div>
            <div className="transition ease-in-out delay-150 lg:hover:scale-110 flex justify-center h-[300px] w-[271px]">
              <img src="https://i.imgur.com/2FHblST.png" alt="mentor4" />
            </div>
            <div className="flex flex-col items-center">
              <p className="font-head text-20 font-semibold mt-10">
                Phạm Hoàng Long
              </p>
              <p className="font-head text-20 font-medium">Account & Creator</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SimpleSwiperWithParams;
