import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {RouterProvider} from "react-router";
import {ToastContainer} from "react-toastify";

import "./app.css";
import {router} from "./Components/Routes/Routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer

    // position="top-center"
    // autoClose={2000}
    // hideProgressBar={false}
    // newestOnTop={false}
    // closeOnClick
    // pauseOnFocusLoss
    // draggable
    // pauseOnHover
    // theme="light"
 />
  </StrictMode>
);
