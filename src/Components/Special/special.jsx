const Special = () => {
  return (
    <section>
      <div className="flex justify-center mt-3 font-head font-semibold text-16 md:text-24">Điểm đặc biệt</div>

      <div className="mt-5 flex items-center flex-col md:flex-row md:justify-center md:row-span-3 md:gap-[100px]">
        
        <div className="font-head text-10 md:text-16 font-medium mt-5 flex flex-col items-center">
          <img className="md:w-4/5 md:h-4/5" src="https://i.imgur.com/7IaGBsI.png" alt="light" />
          <p className="text-center">
            {" "}
            Nội dung thực tế với <br /> Brief thật, Việc thật, <br /> Người Thật{" "}
          </p>
        </div>

        <div className="font-head text-10 md:text-16 font-medium mt-5 flex flex-col items-center">
          <img className="md:w-4/5 md:h-4/5 md:-mt-4" src="https://i.imgur.com/Q0uEzBD.png" alt="light" />
          <p className="text-center md:-mt-10">
            {" "}
            Phương pháp huấn luyện: <br/> Hiểu vấn đề - Mở tư duy <br/> Tạo trải nghiệm - Truyền cảm hứng{" "}
          </p>
        </div>

        <div className="font-head text-10 md:text-16 font-medium mt-5 flex flex-col items-center">
          <img className="md:w-4/5 md:h-4/5" src="https://i.imgur.com/rgrQPH7.png" alt="light" />
          <p className="text-center">
            {" "}
            Nội dung thực tế với <br /> Brief thật, Việc thật, <br /> Người Thật{" "}
          </p>
        </div>

      </div>
    </section>
  );
};

export default Special;
