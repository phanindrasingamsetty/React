import React, { Children, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import About from "./components/About.js";
//import Contact from "./components/Contact.js";
import Body from "./components/Body.js";
import Menu from "./components/Menu.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/usercontext.js";
import { useState } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";
const Contact=lazy(()=>import("./components/Contact.js")
)
const Applayout=()=>{
    const [user,setUser]=useState("phani")
    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedinuser:user,setUser}}>
        <div>
            <Header />
            <Outlet />
        </div>
        </UserContext.Provider>
        </Provider>
    );
}
const approuter=createBrowserRouter([
    {
        path:'/',
        element:<Applayout />,
        children:[
        {
            path:'/',
            element:<Body />
        },
        {
            path:'/about',
            element:<About />
        },
        {
            path:'/contact',
            element:(<Suspense fallback={<h1>Loading</h1>}><Contact /></Suspense>)
        },
        {
            path:'/restaurant/:resid',
            element:<Menu />
        },
        {
            path:'/cart',
            element:<Cart />
        },
    ]
}
    
])
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={approuter} />)