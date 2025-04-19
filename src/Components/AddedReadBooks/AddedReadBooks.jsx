import React from "react";
import {MdStarOutline} from "react-icons/md";
import {Link} from "react-router";
const AddedReadBooks = ({list}) => {


  
  return (





    <div className="">

      <div className="grid grid-cols-5  rounded-lg border h-full p-5 gap-20 ">
        <div className=" bg-[#F3F3F3] flex my-auto rounded-lg py-5">
          <img
            className="aspect-[3/4] mx-auto w-2/3 bg-[#F3F3F3] "
            src={list.image}
            alt=""
          />
        </div>
        <div className="flex flex-col col-span-2 mb-auto gap-2">
          <div className=" grid grid-cols-3 gap-5 justify-between">
            {list.tags.map((tag, index) => (
              <h1
                key={index}
                className="text-green-600 text-center rounded-4xl py-2 bg-green-50"
              >
                {tag}
              </h1>
            ))}
          </div>

          <h1 className=" font-bold md:text-3xl lg:text-2xl">
            {list.bookName}
          </h1>
          <h1>By: {list.author}</h1>

          <div className=" flex flex-row justify-between">
            <h1>{list.category}</h1>
            <div>
              <h1 className=" flex flex-row gap-2">
                {list.rating}{" "}
                <span className=" my-auto">
                  <MdStarOutline />
                </span>
              </h1>
            </div>
          </div>
          <hr className="border-dashed" />
          <div>
            <Link
              className="btn  border-2 text-white  font-bold border-black hover:scale-105 transition-transform bg-green-600"
              to={`/bookDetails/${list.bookId}`}
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddedReadBooks;
