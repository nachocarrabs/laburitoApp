import React from "react";
import "./styles.scss"

import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import Changas from "./pages/changas/Changas.jsx"
import Changa from "./pages/changa/Changa.jsx"
import Message from "./pages/message/Message.jsx"
import Messages from "./pages/messages/Messages.jsx"
import Orders from "./pages/orders/Orders.jsx"
import Add from "./pages/add/Add.jsx"
import MyChangas from "./pages/myChangas/MyChangas.jsx"


import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Home from "./pages/home/Home.jsx"

function App() {

  const Layout = () => {
    return (
      <>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/changas",
          element:<Changas/>
        },
        {
          path:"/changa/:id",
          element:<Changa/>
        },
        {
          path:"/orders",
          element:<Orders/>
        },
        {
          path:"/mischangas",
          element:<MyChangas/>
        },
        {
          path:"/messages",
          element:<Messages/>
        },
        {
          path:"/message/:id",
          element:<Message/>
        },
        {
          path:"/add",
          element:<Add/>
        }
      ]
    },
  ]);


  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
