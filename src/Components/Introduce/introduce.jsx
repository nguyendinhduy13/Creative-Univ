import "./introduce.css";
import {AiFillPlayCircle} from "react-icons/ai";
const Introduce = () => {
 
  return (
    <section>
      <div className=" bg-yellow-main h-[211px] slanted-div group lg:h-[500px]">
        <div className="flex justify-center">
          <div className="mt-3 flex flex-col z-0 lg:ml-[215px]">
            <div className="group-hover:animate-SlideIn2 font-head text-10 font-medium -rotate-2 mt-5 lg:text-[22px]">
              {" "}
              <p>Chương trình Mentorship dành cho Creative Designer</p>
            </div>

            <div className="group-hover:animate-SlideIn2 font-head text-[22px] font-semibold -rotate-[5.44deg] mt-2 ml-3 lg:text-[46px]">
              {" "}
              <p>ĐI ĐÚNG ĐƯỜNG</p>
            </div>
            <div className="flex justify-center lg:ml-[200px]">
              <div className="group-hover:animate-SlideIn2 font-head text-[22px] font-semibold -rotate-[5.44deg] ml-10 lg:text-[46px]">
                {" "}
                <p>ĐƯỢC ĐÚNG </p>
              </div>

              <div className="group-hover:animate-SlideIn2 font-head text-[30px] font-semibold ml-3 -mt-3 lg:text-[72px] lg:ml-[40px]">
                {" "}
                <p>VIỆC </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col z-10 font-semibold ml-5 lg:text-[38px] lg:ml-[70px]">
            <div className="group-hover:animate-SlideIn2 font-hand">
              {" "}
              <p>Introduce</p>
            </div>

            <div className="ml-14 -mt-2 lg:-mt-7 lg:ml-[140px]">
            <img className="lg:w-[50px] lg:h-[120px] w-[20px] h-[50px]" src="https://i.imgur.com/ZinrXno.png" alt="arrow" />
            </div>
            <div className="ml-3">
              <AiFillPlayCircle className="hover:fill-orange-main scale-[3.5] mt-5 ml-4 lg:mt-10 lg:ml-[80px]" color="white"/>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="font-head text-10 font-medium mt-5 ml-[20px] lg:text-[18px] lg:leading-9 lg:mt-[45px]">
            {" "}
            <p>
              Học cùng sếp <br /> Làm cùng khách hàng <br /> tương lai của bạn{" "}
            </p>
          </div>
          <div className="">
            {" "}
            <img
              className="animate-SlideIn z-10 w-[210px] h-[67px] lg:w-full lg:h-full"
              src="https://i.imgur.com/2ICdWV2.png"
              alt="hand"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduce;