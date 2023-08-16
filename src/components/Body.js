import Rescard from "./Rescard";
//import resscard from "../utils/resscard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import getOnlineStatus from "./GetOnlineStatus";
import { promotedRescard } from "./Rescard";
import UserContext from "../utils/usercontext.js";
const Body=()=>{
    //let listtt=resscard;
    const [listtt,setListtt]= useState([]);
    const [bklisttt,setBklisttt]=useState([]);
    const [srchtxt,setSrchtxt]=useState("");
    const {loggedinuser,setUser}=useContext(UserContext)
    //const data=useContext(UserContext);
    //console.log("daaat",data)
    const PromotedRes=promotedRescard(Rescard)
    useEffect(()=>  //this is a call back function
        {fetchdata();},[]); // this will come into picture after frst render cycle is done

    const fetchdata=async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0169992&lng=77.7044335&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        //fetch returns a promise so we use async and await
        //console.log(data)
        const json=await data.json();
        console.log("tsesting",json.data.cards[1].card.card.gridElements)
        console.log("json",json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setListtt(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        setBklisttt(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        //setListtt(json.data.cards[2].data.data.cards)
        //setBklisttt(json.data.cards[2].data.data.cards)
    }
    const status=getOnlineStatus()
    if(status===false){
        return "you are offline"
    }
    if(listtt.length===0){
        return(<Shimmer />);
    }
    function contrend(e){
        setSrchtxt(e.target.value);
        const filteredres=listtt.filter((res)=>res.data.name.toLowerCase().includes(srchtxt.toLowerCase()));
        setBklisttt(filteredres);
    }
    return(
        <div className="body">
            <div className="m-4 p-4">
                <input className="border border-solid border-black" type="text" value={srchtxt} onChange={(e)=>contrend(e)}/>
                <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{
                    const filteredres=listtt.filter((res)=>res.data.name.toLowerCase().includes(srchtxt.toLowerCase()));
                    setBklisttt(filteredres);
                }}>Search</button>
                <button className="px-4 py-2 bg-gray-100 rounded-xl" onClick={()=>{
                    const listttt=listtt.filter((res)=>res.info.avgRating*1>4);
                    setBklisttt(listttt);
                    console.log(listtt);
                }
                }>
                    Show me top restaurants
                </button>

                <label>username: </label>
                <input className="border border-black" placeholder="username" value={loggedinuser} onChange={(e)=>setUser(e.target.value)}/>
            </div>
            <div className="flex flex-wrap">
                {bklisttt.map((e)=>{console.log(e.info.id+" "+e.info.name);})}
                {bklisttt.map((element)=>
                (<Link to={"/restaurant/"+element.info.id} className="text-link">{element.info.promoted?<PromotedRes key={element.info.id} resdtls={element}/>:<Rescard key={element.info.id} resdtls={element}/>}</Link>))}
            </div>
        </div>
    )
}
export default Body;