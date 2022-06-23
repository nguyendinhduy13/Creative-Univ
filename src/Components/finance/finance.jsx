const Finance = () => {
  return (
    <section className="">
      <div className="justify-center items-center bg-White">
        <div className="font-head text-[16px]; text-center font-semibold mt-5">
          Đừng để vấn đề về tài chính <br /> cản bước bạn?
        </div>

        <div className="font-body font-medium text-[9.5px] mt-5">
          <p className="leading-6 px-5">
            Chúng tôi hiểu và đồng cảm với những trăn trở về tài chính của bạn
            vào lúc này…
            <br />
            “Sớm đầu tư từ hôm nay, đường sự nghiệp thẳng tiến…”
            <br />
            Vì bạn xứng đáng được đầu tư từ ngày hôm nay, Creative Univ <br />{" "}
            đồng hành cùng bạn với Chính sách học bổng lên đến 50% và <br />
            đặc biệt 100% portfolio ứng tuyển học bổng sẽ được các mentor đánh
            giá, góp ý với những nhận xét chân thành và thực tế nhất.
          </p>
        </div>
        <div className="font-body text-10 font-medium mt-5 ml-5 mr-10 flex flex-col">
          <p className="">
            Học phí{" "}
            <span className="font-head text-20 font-semibold mt-5 ml-5 text-center">
              8.500.000 VND
            </span>
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-300 h-[52px] font-head text-[30px] font-semibold text-center mt-5">
              50%
            </div>
            <div className="bg-gray-300 h-[52px] font-head text-[30px] font-semibold text-center mt-5">
              20%
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col -ml-10">
              <div className="font-head text-10 font-medium flex flex-col w-[110px] h-[50px] mt-5 ml-[40px]">
                <img src="https://i.imgur.com/cyZGdLe.png" alt="light" />
              </div>
              <p className="mt-8 ml-2 text-[25px] font-hand"> Xem chi tiết</p>
            </div>

            <div className="relative mt-[35px] ml-[16px]">
              <span class="absolute w-[22px] h-[22px] inline-flex rounded-full bg-yellow-main " />
              <span class="asolute animate-ping w-[22px] h-[22px] inline-flex rounded-full bg-yellow-main " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Finance;
