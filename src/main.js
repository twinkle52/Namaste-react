import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Header from "./components/Header";
import ResturantsMenu from "./components/ResturantsMenu";
import Cart from "./components/Cart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import UserContext from "./utils/context/UserContext";
import { ThemeContext } from "./utils/context/ThemeContext";
import { Provider } from "react-redux"; // Provider comes from react-redux as its now time to bind redux with react
// and that will be done by provider dependency.react-redux is like a bridge here between redux and react
import appStore from "./utils/appStore";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();
  // Authenticate a user by passing username and password, as done in application from UI.
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // we made a api call to by sending usertname and password and we got the person name as response from backend
    const data = {
      name: "Twinkle Jaiswal",
    };
    setUserName(data.name);
  }, []);

  return (
    // Provider takes store as props and store will have value appStore, to bind our app with redux store.
    <Provider store={appStore}>
      <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <div className="app">
            <Header />
            <Outlet />
          </div>
        </UserContext.Provider>
      </ThemeContext.Provider>
    </Provider>
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
        path: "/cart",
        element: <Cart />,
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
