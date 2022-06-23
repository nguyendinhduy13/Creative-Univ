import "./App.css";
import { useEffect, useState } from "react";
import Introduce from "./Components/Introduce/introduce";
import Problems from "./Components/Problems/problems";
import Special from "./Components/Special/special";
import StepCard from "./Components/Card/StepCard";
import SimpleSwiperWithParams from "./Components/swiper/swiper";
import Sponsor from "./Components/sponsor/sponsor";
import Finance from "./Components/finance/finance";
import Form from "./Components/form/form";
import Job from "./Components/job/job";
import Navbar from "./Components/navbar/navbar";

function App() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  useEffect(() => {
    if (windowSize.width < 500) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [windowSize]);

  return (
    <div className="h-screen overflow-auto">
      <div>
        <Navbar />
      </div>
      <div className="py-4 ">
        <div className="px-4">
          <Problems isMobile={isMobile} />
        </div>
        <div className="mt-16">
          <Introduce />
        </div>
        <div className="px-4">
          <Special />
        </div>

        <div className="mt-20 px-4 lg:px-[200px]">
          <div className="flex justify-center font-head font-semibold text-16 lg:text-24">
            Hành trình phát triển
          </div>
          <div className="mt-10  grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-x-[15px] lg:gap-y-[15px]">
            <StepCard />
          </div>

          <div
            className="mt-[30px] flex flex-col
        items-center"
          >
            <div className="flex justify-center font-head font-semibold text-16  lg:text-24">
              Mentor dẫn dắt
            </div>
            <div className="font-body text-[11px] lg-text[16px]">
              Mỗi chương trình sẽ có bộ 3 Mentors đồng hành cùng bạn
            </div>
          </div>
         
        </div>
        
      </div>
      <div>
      <SimpleSwiperWithParams isMobile={isMobile} />
      </div>

      <div className="mt-5">
        <Sponsor/>
      </div>
      <div>
        <Finance/>
      </div>
      <div className="mb-[120px]">
        <Form/>
      </div>
      <div className="-mt-20 ">
        <div
          className="mt-[10px]0 flex flex-col
        items-center"
        >
          <div className="flex justify-center font-head font-semibold text-16">
            Đối tác tuyển dụng
          </div>
        </div>
        <Job />
      </div>
    </div>
  );
}
export default App;
