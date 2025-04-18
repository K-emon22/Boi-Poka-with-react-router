
import React, { useEffect } from "react";
import { FaRegStar } from "react-icons/fa";
import { NavLink } from "react-router";
const SingleBooks = ({SingleBook}) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <NavLink to={`/bookDetails/${SingleBook.bookId}`}>
      <div className="flex flex-col  rounded-lg border h-full p-5 gap-5 ">
      <div className="flex justify-center bor bg-[#F3F3F3] rounded-lg p-5">
        <img className="aspect-[3/4] w-2/5 bg-[#F3F3F3] " src={SingleBook.image} alt="" />
      </div>
      <div className="flex flex-col  mb-auto gap-2">
        <div className=" grid grid-cols-3 gap-5 justify-between">
          {SingleBook.tags.map((tag,index) => (
            <h1 key={index} className="text-green-600 text-center rounded-4xl py-2 bg-green-50"> {tag}</h1>
          ))}
        </div>

        <h1 className=" font-bold md:text-3xl lg:text-2xl">{SingleBook.bookName}</h1>
        <h1>By: {SingleBook.author}</h1>
        <hr className="border-dashed"/>
        <div className=" flex flex-row justify-between">
          <h1>{SingleBook.category}</h1>
          <div>
          <h1 className=" flex flex-row gap-2">{SingleBook.rating} <span className=" my-auto"><FaRegStar /></span></h1>
          </div>
        </div>
      </div>
    </div>

    </NavLink>
  );
};

export default SingleBooks;
