import { useState } from "react"
import Items from "./Items"
const Accordion=(props)=>{
    const [itemstat,setItemstat]=useState(0)
    const items=props.details.card.card.itemCards
    const handleaccord=()=>{
        itemstat==0?setItemstat(1):setItemstat(0)
        props.setShowindex(props.index)
    }
    return(
        
        <div className="w-6/12 m-auto my-4 p-4 bg-gray-600 cursor-pointer shadow-sm ">
            <div className="flex justify-between" onClick={handleaccord}>
            <span className="font-bold text-lg hover:scale-105">{props.details.card.card.title}</span>
            <span className="font-bold text-lg">^</span>
            </div>
            <div >{(itemstat==1)&&(props.showitems==1)&&items.map((e)=><Items details={e}/>)}</div>
        </div>
    )
}
export default Accordion;