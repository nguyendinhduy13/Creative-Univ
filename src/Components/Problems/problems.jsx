const Problems = () => {
  return (
    <section className="">
      <div className="justify-center items-center bg-White">
        <div className="font-hand text-[36px]">Bạn...</div>

        <div className="font-body font-medium text-[11px] ml-2 -rotate-2">
          <p>
            Cái gì cũng “một chút” nhưng nổi - bật thì chưa <br />
            Cứ cảm thấy thiếu thiếu, mà thiếu gì thì không biết <br />
            Có hiểu “sơ sơ” về môi trường sáng tạo chuyên nghiệp <br />
            “Rải” CV khắp mọi nơi nhưng không ai mời đến “chơi” <br />
            Người ta làm việc trong vui vẻ còn mình thì...
          </p>
        </div>
        <div className=" ml-10 justify-center items-center/">
          <img
            className=" w-[256px] h-[195px] mt-5"
            src="https://i.imgur.com/zLHeU4F.png"
            alt="problems"
          />
        </div>
        <div className="flex">
        <div className="flex-auto ">
            <img
              className="-mt-8"
              src="https://i.imgur.com/gDpg3mo.png"
              alt="problems"
            />
          </div>
          <div className="flex-auto " >
            <div className="font-head font-medium text-16 -rotate-2 ml-10 mt-5">
              Creative Univ sẽ giúp bạn
            </div>
            <div className="font-head font-medium text-16 -rotate-2 mt-4 ml-5">
              Không sao cả
            </div>
            <div className="font-head font-medium text-16 -rotate-2 mt-5 -ml-10">
              Bạn luôn có những vấn đề
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Problems;
