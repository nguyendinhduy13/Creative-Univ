const Problems = (props) => {
  const {isMobile} = props;
  return (
    <section className="lg:">
      <div className="justify-center items-center bg-White">
        <div className="lg:flex">
          <div className="lg: ml-[5%]">
        <div className="font-hand text-[36px] lg:text-[60px]">Bạn...</div>

        <div className="font-body font-medium text-[11px] ml-2 -rotate-2 leading-7 lg:text-[16px] lg:leading-10 lg:mt-[2%]">
          <p>
            Cái gì cũng “một chút” nhưng nổi - bật thì chưa <br />
            Cứ cảm thấy thiếu thiếu, mà thiếu gì thì không biết <br />
            Có hiểu “sơ sơ” về môi trường sáng tạo chuyên nghiệp <br />
            “Rải” CV khắp mọi nơi nhưng không ai mời đến “chơi” <br />
            Người ta làm việc trong vui vẻ còn mình thì...
          </p>
        </div>
        </div>
        <div className="ml-10 justify-center items-center lg:order-first lg:w-[55%]">
          <img
            className="w-full mt-5 lg:h-[80%]"
            src="https://i.imgur.com/zLHeU4F.png"
            alt="problems"
          />
        </div>
        </div>
        <div className="flex">
          <div className="flex-auto ">
            {isMobile ? (<img
              className="-mt-8"
              src="https://i.imgur.com/gDpg3mo.png"
              alt="problems"
            />
            ) : (<img
              className="-mt-[42%] ml-[105%] w-[220px] h-[118px]"
              src="https://i.imgur.com/fN66J8O.png"
              alt="problems"
            />
            )
           }
          </div>
          <div className="flex-auto lg:-mt-[20%]">
            <div className="font-head font-medium text-16 -rotate-2 ml-10 mt-5 lg:ml-[55%] lg:text-[22px]">
              Creative Univ sẽ giúp bạn
            </div>
            <div className="font-head font-medium text-16 -rotate-2 mt-4 ml-5 lg:ml-[28%] lg:text-[22px]">
              Không sao cả
            </div>
            <div className="font-head font-medium text-16 -rotate-2 mt-5 -ml-10 lg:-ml-[17%] lg:text-[22px]">
              Bạn luôn có những vấn đề
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;