import React from "react";

const HeroBanner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-10 md:justify-between mt-20 mx-[5%] bg-[#1313130D] p-16 rounded-xl ">
      <div className="flex flex-col gap-3 sm:gap-5 md:gap-7 lg:gap-10 my-auto">
        <h1 className="font-bold text-2xl sm:text-3xl lg:text-5xl">
          Books to freshen up your bookshelf
        </h1>
        <div>
          <button className="btn text-white bg-green-600 h-13  md:h-16">
            View The List
          </button>
        </div>
      </div>
      <div className="my-auto">
        <img src="books.jpg" alt="" />
      </div>
    </div>
  );
};

export default HeroBanner;
