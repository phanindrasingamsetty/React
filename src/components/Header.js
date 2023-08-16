import React from "react";
import ReactDOM from "react-dom/client";
import logo from "../utils/constants.js";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/usercontext.js";
import { useSelector } from "react-redux";
import appStore from "../utils/appStore.js";

const Header=()=>{
    const [btnvalue, setBtnvalue]=useState('Login');
    const data=useContext(UserContext)
    const cartitems=useSelector((store)=>store.cart.items)
    console.log("cart",cartitems)
    console.log("in header",data)
    function chgbtn(value){
        console.log('enterede');
        if(value==='Login'){
            setBtnvalue('Logout');
            setUser("phani")
        }
        else{
            setBtnvalue('Login');
            setUser("default")
        }
    }
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg mb-2">
            <div className="logo-container">
                <Link to="/"><img src={logo} alt="logo"/></Link>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About</Link></li>
                    <li className="px-4"><Link to="/contact">Contact us</Link></li>
                    <li className="px-4 font-bold"><Link to="/cart">Cart-({cartitems.length})</Link></li>
                    <button className="loginbtn" onClick={()=>{chgbtn(btnvalue)}}>{btnvalue}</button>
                    
                    <li className="px-4 font-bold">{data.loggedinuser}</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;