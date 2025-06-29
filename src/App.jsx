import { RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { createBrowserRouter } from "react-router";
import Root from "./Pages/Root";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import BackOffice from "./Pages/BackOffice";
import { useSelector, useDispatch } from "react-redux";
import { contactActions } from "./store/contact-slice";
import { sendContactData } from "./store/contact-actions";
import { useEffect } from "react";
import LoginPage from "./Pages/Login";
import { tokenloader, checkAuthLoader } from "./helper/getAuth";
import { action as logoutAction } from "./Pages/Logout";

function App() {
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contact);
  const isLogin = useSelector((state) => state.auth.authToken);

  console.log("isLogin", isLogin);
  console.log("app contact");
  useEffect(() => {
    if (contact.changed) {
      console.log("contact sent to action creators");
      dispatch(sendContactData(contact));
      dispatch(contactActions.reset());
    }
  }, [contact]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: "<h1>Error</h1>",
      id: "root",
      loader: tokenloader,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <h1>About</h1>,
        },
        {
          path: "/contact",
          element: <h1>Contact</h1>,
        },
        {
          path: "/Projects",
          element: <h1>Projects</h1>,
        },
        {
          path: "/registration",
          element: <Register />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/backoffice",
          element: <BackOffice />,
          loader: checkAuthLoader,
        },
        {
          path: "/logout",
          action: logoutAction,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
