
import SingleBooks from "./SingleBooks";

const AllBooks = ({allData}) => {




  
  return (
    <div className="mx-[5%]">
      <h1 className="font-bold text-4xl text-center mt-20 mb-14"> Books </h1>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {allData.map((SingleBook) => (
          <div key={SingleBook.bookId}>
            <SingleBooks SingleBook={SingleBook}></SingleBooks>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
