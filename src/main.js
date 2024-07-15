import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Header from "./components/Header";
import ResturantsMenu from "./components/ResturantsMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resturants/:resId",
        element: <ResturantsMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
