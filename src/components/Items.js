import { useDispatch } from "react-redux"
import { addItems } from "../utils/cartslice"
const Items=(props)=>{
    {console.log(props)}
    const dispatch=useDispatch()
    const handleadd=(pp)=>{      
        dispatch(addItems(pp))
    };
    return(
        <div className="border-b-2 border-solid border-black mx-0 my-2 flex justify-between">
            <div className="text-left w-9/12">
            <h3 className="font-bold">{props.details.card.info.name}</h3>
            <p className="text-sm">{props.details.card.info.description}</p>
            <h3 className="font-bold">{props.details.card?.info?.price*1/100}</h3>
            </div>
            <div className="w-3/12 h-2/5 mb-2 rounded-xl">
                <button className="flex absolute bg-slate-400 rounded-lg m-2 font-bold" onClick={()=>handleadd(props.details)}>ADD+</button>
            <img  src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+props.details.card.info.imageId}/>
            </div>
        </div>
    )
}
export default Items;