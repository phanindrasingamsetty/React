import {rescardlogo} from "../utils/constants";
const Rescard=(props)=>{
    return(
        <div className="m-4 p-4 w-[250px] bg-slate-400 rounded-lg hover:bg-slate-200 ">
            <img className="rounded-lg" src={rescardlogo+props.resdtls.info.cloudinaryImageId} alt="Meghana Foods"/>
            <h3 className="font-bold py-3 text-lg">{props.resdtls.info.name}</h3>
            <h4>{props.resdtls.info.cuisines.join(", ")}</h4>
            <h4>{props.resdtls.info.avgRating}</h4>
            <h4>{props.resdtls.info.deliveryTime+" minutes"}</h4>
        </div>
    )
}
export const promotedRescard=(Rescard)=>{
    return(props)=>{
        return(
            <div>
                <label className="m-4 p-4 absolute bg-black text-white rounded-lg">Promoted</label>
                <Rescard {...props}/>
            </div>
        )
    }
}
export default Rescard;