import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import Menucard from "./Menucard";
import Accordion from "./Accordion";
const Menu=()=>{
    const [resinfo,setResinfo]=useState(null);
    const [resinfobk,setResinfobk]=useState(null);
    const [showindex,setShowindex]=useState(null);
    useEffect(()=>{
        fetchdata()
    },[]);
    console.log("params",useParams())
    const {resid}=useParams();
    console.log("resid:"+resid)
    const fetchdata=async ()=>{
        const dd="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0169992&lng=77.7044335&restaurantId="+resid;
        const data=await fetch(dd)
        console.log("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0169992&lng=77.7044335&restaurantId="+resid)
        console.log(dd)
        const json=await data.json()
        setResinfo(json.data)
        setResinfobk(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card?.itemCards)
    }
    if(resinfo===null){
        return <Shimmer />
    }
    //{console.log("main",resinfo.cards[2].groupedCard.cardGroupMap.REGULAR)}
    {console.log("resnfo",resinfo)}
    categories=resinfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((e)=>e.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    {console.log("categories",categories)}
    return(
        <div>
            <div>
                <button className="menubutton" onClick={()=>{
                    console.log(resinfobk)
                    const newlist=resinfobk.filter((e)=>e.card.info.isVeg!==1)
                    setResinfobk(newlist)
                }}>NonVeg</button>
                <button className="menubutton" onClick={()=>{
                    setResinfobk(resinfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card?.itemCards)
                }}>All Items</button>
            </div>
            <div className="text-center">
            <h1 className="text-4xl font-bold">{resinfo.cards[0].card.card.info.name}</h1>
            <h2 className="text-2xl">{resinfo.cards[0].card.card.info.cuisines.join(", ")}</h2>
            <div className="menucarditemscont">
            {categories.map((e,index)=>
                    <Accordion details={e}
                    showitems={index===showindex?1:0}
                    index={index}
                    setShowindex={setShowindex}
             />)}
            </div></div>
        </div>   
    )
}
export default Menu;