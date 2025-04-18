import React, {useEffect, useState} from "react";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AddedReadBooks from "../AddedReadBooks/AddedReadBooks";
import {useLoaderData} from "react-router";
import {getStoredBook} from "../../Utilityes/addToDb";

const ReadList = () => {
  const [readLists, setreadLists] = useState([]);
  const ReadList = useLoaderData();

  useEffect(() => {
    const readListData = getStoredBook();

    const readBooksDatatoNum = readListData.map((numBook) => parseInt(numBook));

    const myReadList = ReadList.filter((book) =>
      readBooksDatatoNum.includes(book.bookId)
    );
    setreadLists(myReadList);
  }, []);

  return (
    <div className="mx-[5%] mt-10">
      <h1 className="font-bold text-5xl text-center">Books</h1>
      <div className="text-center mt-5 mb-5">
        <button> Short By </button>
      </div>

      <div className="">
        <Tabs>
          <TabList>
            <Tab>Read Books </Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <h1 className="text-center"> Book I Read: {readLists.length}</h1>
            <div className="flex flex-col gap-5">
              {readLists.map((list) => (
                <AddedReadBooks key={list.bookId} list={list}></AddedReadBooks>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ReadList;
