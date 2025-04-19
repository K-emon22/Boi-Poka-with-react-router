import React, {useEffect} from "react";

import {useLoaderData, useParams} from "react-router";
import {addTostoredDB} from "../../Utilityes/addToDb";
import {addTostoredDBWishList} from "../../Utilityes/AdToWhitelist";
const BookDetails = () => {
  const {id} = useParams();
  const data = useLoaderData();
  const numId = parseFloat(id);

  const singleBook = data.find((book) => book.bookId === numId);

  const handleMarkAsRead = () => {
    addTostoredDB(id);
  };
  const handleWishList = () => {
    addTostoredDBWishList(id);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="grid lg:grid-cols-2 mx-[5%] gap-5 mt-10 border p-5 rounded-lg row-reverse">
      <div className="bg-[#f3f3f3] h-full flex justify-center  rounded-lg py-10">
        <img
          className=" w-1/2 md:w-3/5 aspect-[3/4] mx-auto my-auto "
          src={singleBook.image}
          alt=""
        />{" "}
      </div>

      <div className="flex flex-col gap-2 sm:gap-3">
        <h1 className="font-bold md:text-3xl lg:text-2xl">
          {singleBook.bookName}
        </h1>
        <h1> By: {singleBook.author}</h1>

        <p>{singleBook.category}</p>

        <h1>
          <span className="font-semibold text-lg ">Review :</span>{" "}
          {singleBook.review}
        </h1>

        <div className=" flex  flex-row gap-5 ">
          {" "}
          <span className="font-semibold text-lg">Tags :</span>{" "}
          {singleBook.tags.map((tag, index) => (
            <div key={index}>
              <h1 className=" bg-green-50 text-green-600 px-2 rounded-lg font-semibold my-auto">
                {tag}
              </h1>
            </div>
          ))}{" "}
        </div>

        <hr className="border-dashed" />
        <h1>
          <span className="font-semibold text-lg"> Number of Pages :</span>{" "}
          {singleBook.totalPages}
        </h1>
        <h1>
          {" "}
          <span className="font-semibold text-lg">Publisher :</span>{" "}
          {singleBook.publisher}
        </h1>
        <h1>
          <span className="font-semibold text-lg">Year of Publishing : </span>{" "}
          {singleBook.yearOfPublishing}
        </h1>
        <h1>
          <span className="font-semibold text-lg">Rating :</span>{" "}
          {singleBook.rating}
        </h1>

        <div className="lg:w-2/3 grid md:grid-cols-2 gap-5">
          <button
            onClick={() => handleMarkAsRead(id)}
            className="btn bg-white border-2 border-black font-bold hover:scale-105 transition-transform hover:bg-green-700 hover:text-white"
          >
            Mark As Read
          </button>

          <button
            onClick={() => handleWishList(id)}
            className="btn bg-blue-400 border-2 text-white  font-bold border-black hover:scale-105 transition-transform hover:bg-green-700 "
          >
            Add To Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
