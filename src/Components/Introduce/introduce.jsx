import "./introduce.css";
const Introduce = () => {
  return (
    <section>
      <div className="bg-yellow-main h-[211px] slanted-div group">
        <div className="flex justify-center">
          <div className="mt-3 flex flex-col z-0 ">
            <div className="group-hover:animate-SlideIn2 font-head text-10 font-medium -rotate-2 mt-5">
              {" "}
              <p>Chương trình Mentorship dành cho Creative Designer</p>
            </div>

            <div className="group-hover:animate-SlideIn2 font-head text-[22px] font-semibold -rotate-[5.44deg] mt-2 ml-3">
              {" "}
              <p>ĐI ĐÚNG ĐƯỜNG</p>
            </div>
            <div className="flex justify-center">
              <div className="group-hover:animate-SlideIn2 font-head text-[22px] font-semibold -rotate-[5.44deg] ml-10">
                {" "}
                <p>ĐƯỢC ĐÚNG </p>
              </div>

              <div className="group-hover:animate-SlideIn2 font-head text-[30px] font-semibold ml-3 -mt-3">
                {" "}
                <p>VIỆC </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col z-10">
            <div className="group-hover:animate-SlideIn2 font-hand">
              {" "}
              <p>Introduce</p>
            </div>

            <div className="ml-14">
              <img src="https://i.imgur.com/FdHXAES.png" alt="arrow" />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="font-head text-10 font-medium mt-5 ml-[20px]">
            {" "}
            <p>
              Học cùng sếp <br /> Làm cùng khách hàng <br /> tương lai của bạn{" "}
            </p>
          </div>
          <div className="">
            {" "}
            <img
              className="animate-SlideIn z-10 w-[210px] h-[67px]"
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
