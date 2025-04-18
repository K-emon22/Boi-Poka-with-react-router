import React, {Suspense} from "react";

import {createBrowserRouter} from "react-router";
import Root from "../RootFile/Root";
import Error from "../../ErrorPage/Error";
import MainBodyFound from "../Main/MainBodyFound";
import About from "../Main/About";
import BookDetails from "../Book Detals/BookDetails";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root> </Root>,
    // errorElement: <Error></Error>,
    children: [
      {
        loader: () => fetch("/BooksData.json"),
        path: "/",
        element: <MainBodyFound> </MainBodyFound>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "/bookDetails/:id",

        loader: () => fetch("/BooksData.json"),
        element: <BookDetails></BookDetails>,
      },
    ],
  },
  {
    path: "*",
    element: <Error> </Error>,
  },
]);
