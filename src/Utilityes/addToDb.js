import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ✅ লোকাল স্টোরেজ থেকে readList এর ডেটা বের করা ফাংশন
const getStoredBook = () => {
  const storedBookString = localStorage.getItem("readList");

  if (storedBookString) {
    const storedBooksData = JSON.parse(storedBookString);
    return storedBooksData;
  } else {
    return [];
  }
};

// ✅ লোকাল স্টোরেজে নতুন বইয়ের আইডি সেভ করার ফাংশন
const addTostoredDB = (id) => {
  const storedBookData = getStoredBook();

  if (storedBookData.includes(id)) {
    // 🔴 আগেই থাকলে error toast দেখাবো
    toast("❌ এই বইটি আগেই যোগ করা হয়েছে!", {
      style: {
        background: "#1f1f1f",
        color: "#fff",
        boxShadow: "0 0 15px 2px #ff4d4d", // red glow
        borderRadius: "8px",
        fontWeight: "600",
        fontSize: "1.1rem",

      },
      position: "top-right",
      autoClose: 2500,
    });
  } else {
    storedBookData.push(id);
    localStorage.setItem("readList", JSON.stringify(storedBookData));

    // ✅ নতুন বই অ্যাড হলে success toast দেখাবো
    toast("✅ নতুন বই সফলভাবে যোগ হয়েছে!", {
      icon: "📘",
      style: {
        background: "#1e1e2f",
        color: "#fff",
        boxShadow: "0 0 15px 2px #00f5a0", // green neon glow
        borderRadius: "8px",
        fontWeight: "600",
        fontSize: "1.1rem",
      },
      position: "top-right",
      autoClose: 2500,
    });
  }
};

// 🔄 এক্সপোর্ট
export {addTostoredDB, getStoredBook};
