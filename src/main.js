import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Header from "./components/Header";
import ResturantsMenu from "./components/ResturantsMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";

// names of // lazy loading
// chunking
// Code Spilting
// Dynamic Bundling
// on demand loading
// dynamic import

// new js file will be created in the dev tools, network select js and there you will see grocery js as soon as we clcik it
// here import is the function that take the path of grocery not the normal import, and lazy is named export function from react that takes a callback function

// When we click on the grocery, it will take time to load(12ms for Akshay) the component as its a on demand component and not alraedy present in the js bundle in network tab if you see
// so when the u click on the grocery it will take time and the react is so fast that it finds no grocery at that time and gives error
// so how we will handle that, react gives us the component Suspense. till the grocery loads react will show something
// fallback is when the component is not present or loaded what to show is handled by fallback
const Grocery = lazy(() => import("./components/Grocery"));

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
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
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
