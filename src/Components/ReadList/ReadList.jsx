// import React, {useEffect, useState} from "react";
// import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
// import "react-tabs/style/react-tabs.css";
// import AddedReadBooks from "../AddedReadBooks/AddedReadBooks";
// import {useLoaderData} from "react-router";
// import {getStoredBook} from "../../Utilityes/addToDb";
// import WishListedBook from "../AddedReadBooks/WishListedBook";

// import {addTowishList} from "../../Utilityes/AdToWhitelist";
// const ReadList = () => {
//   const [sort, setSort] = useState("");
//   const [readLists, setreadLists] = useState([]);
//   const [wishLists, setWishLists] = useState([]);
//   const ReadList = useLoaderData();

//   const handleSortForReadList = (type) => {
//     setSort(type);

//     if (type === "Rating") {
//       const shortedByRatings = [...readLists].sort(
//         (a, b) => a.rating - b.rating
//       );

//       setreadLists(shortedByRatings);
//     } else if (type === "Author") {
//       const shortedByAuthor = [...readLists].sort((a, b) =>
//         a.author.localeCompare(b.author)
//       );

//       setreadLists(shortedByAuthor);
//     }
//   };

//   //   const handleSortForWishList = (type) => {
//   //     setSort(type);

//   //     if (type === "Rating") {
//   //       const shortedByRatings = [...wishLists].sort(
//   //         (a, b) => a.rating - b.rating
//   //       );

//   //       setreadLists(shortedByRatings);
//   //     } else if (type === "Author") {
//   //       const shortedByAuthor = [...wishLists].sort((a, b) =>
//   //         a.author.localeCompare(b.author)
//   //       );

//   // setWishLists(shortedByAuthor);
//   //     }
//   //   };

//   useEffect(() => {
//     const readListData = getStoredBook();

//     const readBooksDatatoNum = readListData.map((numBook) => parseInt(numBook));

//     const myReadList = ReadList.filter((book) =>
//       readBooksDatatoNum.includes(book.bookId)
//     );
//     setreadLists(myReadList);

//     // ✅ Wishlisted Books
//     const wishListData = addTowishList();
//     const wishBooksIds = wishListData.map((id) => parseInt(id));
//     const wishBooks = ReadList.filter((book) =>
//       wishBooksIds.includes(book.bookId)
//     );
//     setWishLists(wishBooks);
//   }, []);

//   return (
//     <div className="mt-2">
//       <h1 className="font-bold text-5xl text-center bg-[#F3F3F3] mb-2 p-2.5 rounded-lg">
//         Books
//       </h1>

//       <div className="mx-[5%]">
//         <div className="text-center">
//           <div className="dropdown dropdown-right dropdown-end">
//             <div tabIndex={0} role="button" className="btn m-1 font-semibold">
//               Sort By {sort ? sort : ""}
//             </div>
//             <ul
//               tabIndex={0}
//               className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
//             >
//               <li>
//                 <button onClick={() => handleSortForReadList("")}>
//                   Default
//                 </button>
//               </li>
//               <li>
//                 <button onClick={() => handleSortForReadList("Rating")}>
//                   Ratings
//                 </button>
//               </li>
//               <li>
//                 <button onClick={() => handleSortForReadList("Author")}>
//                   Author Name
//                 </button>
//               </li>
//               <li>
//                 <button onClick={() => handleSortForReadList("Name")}>
//                   Book Name
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="">
//           <Tabs>
//             <TabList>
//               <Tab>Read Books </Tab>
//               <Tab>Wishlist Books</Tab>
//             </TabList>

//             <TabPanel>
//               <h1 className="text-center">Book I Read: {readLists.length}</h1>
//               <div className="flex flex-col gap-5">
//                 {readLists.map((list) => (
//                   <AddedReadBooks
//                     key={list.bookId}
//                     list={list}
//                   ></AddedReadBooks>
//                 ))}
//               </div>
//             </TabPanel>

//             <TabPanel>
//               <h1 className="text-center">
//                 Wishlisted Book : {wishLists.length}
//               </h1>
//               <div className="flex flex-col gap-5">
//                 {wishLists.map((list) => (
//                   <WishListedBook
//                     key={list.bookId}
//                     list={list}
//                   ></WishListedBook>
//                 ))}
//               </div>
//             </TabPanel>
//           </Tabs>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReadList;
import React, {useEffect, useState} from "react";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {useLoaderData} from "react-router";

import AddedReadBooks from "../AddedReadBooks/AddedReadBooks";
import WishListedBook from "../AddedReadBooks/WishListedBook";

import {getStoredBook} from "../../Utilityes/addToDb";
import {addTowishList} from "../../Utilityes/AdToWhitelist";

const ReadList = () => {
  const [sort, setSort] = useState("");
  const [readLists, setreadLists] = useState([]);
  const [wishLists, setWishLists] = useState([]);
  const ReadList = useLoaderData();

  useEffect(() => {
    const readListData = getStoredBook();
    const readBooksDatatoNum = readListData.map((numBook) => parseInt(numBook));

    const myReadList = ReadList.filter((book) =>
      readBooksDatatoNum.includes(book.bookId)
    );
    setreadLists(myReadList);

    // ✅ Wishlisted Books
    const wishListData = addTowishList();
    const wishBooksIds = wishListData.map((id) => parseInt(id));
    const wishBooks = ReadList.filter((book) =>
      wishBooksIds.includes(book.bookId)
    );
    setWishLists(wishBooks);
  }, []);

  const handleSortForReadList = (type) => {
    setSort(type);

    if (type === "Rating") {
      const shortedByRatings = [...readLists].sort(
        (a, b) => a.rating - b.rating
      );
      setreadLists(shortedByRatings);
    } else if (type === "Author") {
      const shortedByAuthor = [...readLists].sort((a, b) =>
        a.author.localeCompare(b.author)
      );
      setreadLists(shortedByAuthor);
    } else if (type === "Name") {
      const shortedByAuthor = [...readLists].sort((a, b) =>
        a.bookName.localeCompare(b.bookName)
      );
      setreadLists(shortedByAuthor);
    }
  };

  // const handleSortForWishList = (type) => {
  //   setSort(type);
  //   if (type === "Rating") {
  //     const shortedByRatings = [...wishLists].sort(
  //       (a, b) => a.rating - b.rating
  //     );
  //     setreadLists(shortedByRatings);
  //   } else if (type === "Author") {
  //     const shortedByAuthor = [...wishLists].sort((a, b) =>
  //       a.author.localeCompare(b.author)
  //     );
  //     setWishLists(shortedByAuthor);
  //   }
  // };

  return (
    <div className="mt-2">
      <h1 className="font-bold text-5xl text-center bg-[#F3F3F3] mb-2 p-2.5 rounded-lg">
        Books
      </h1>

      <div className="mx-[5%]">
        <div className="text-center">
          <div className="dropdown dropdown-right dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1 font-semibold">
              Sort By {sort ? sort : ""}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <button onClick={() => handleSortForReadList("")}>
                  Default
                </button>
              </li>
              <li>
                <button onClick={() => handleSortForReadList("Rating")}>
                  Ratings
                </button>
              </li>
              <li>
                <button onClick={() => handleSortForReadList("Author")}>
                  Author Name
                </button>
              </li>
              <li>
                <button onClick={() => handleSortForReadList("Name")}>
                  Book Name
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="">
          <Tabs>
            <TabList>
              <Tab>Read Books </Tab>
              <Tab>Wishlist Books</Tab>
            </TabList>

            <TabPanel>
              <h1 className="text-center">Book I Read: {readLists.length}</h1>
              <div className="flex flex-col gap-5">
                {readLists.map((list) => (
                  <AddedReadBooks
                    key={list.bookId}
                    list={list}
                  ></AddedReadBooks>
                ))}
              </div>
            </TabPanel>

            <TabPanel>
              <h1 className="text-center">
                Wishlisted Book : {wishLists.length}
              </h1>
              <div className="flex flex-col gap-5">
                {wishLists.map((list) => (
                  <WishListedBook
                    key={list.bookId}
                    list={list}
                  ></WishListedBook>
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ReadList;
