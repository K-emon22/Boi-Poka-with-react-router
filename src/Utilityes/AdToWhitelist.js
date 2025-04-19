import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const addTowishList = () => {
  const storedBookString = localStorage.getItem("wishList");

  if (storedBookString) {
    const storedBooksData = JSON.parse(storedBookString);
    return storedBooksData;
  } else {
    return [];
  }
};

const addTostoredDBWishList = (id) => {
  const storedBookData = addTowishList();

  if (storedBookData.includes(id)) {
    toast("❌ এই বইটি আগেই উইসলিস্টে যোগ করা হয়েছে!", {
      style: {
        background: "#1f1f1f",
        color: "#fff",
        boxShadow: "0 0 15px 2px #ff4d4d",
        borderRadius: "8px",
        fontWeight: "600",
        fontSize: "1.1rem",
      },
      position: "top-right",
      autoClose: 2500,
    });
  } else {
    storedBookData.push(id);
    localStorage.setItem("wishList", JSON.stringify(storedBookData));

    toast("✅ নতুন বই সফলভাবে উইসলিস্টে যোগ হয়েছে!", {
      icon: "📘",
      style: {
        background: "#1e1e2f",
        color: "#fff",
        boxShadow: "0 0 15px 2px #00f5a0",
        borderRadius: "8px",
        fontWeight: "600",
        fontSize: "1.1rem",
      },
      position: "top-right",
      autoClose: 2500,
    });
  }
};

export {addTowishList, addTostoredDBWishList};
