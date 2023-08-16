const Menucard=(props)=>{
    return(
    <div className="menucarditems" style={{backgroundColor:'#f0f0f0'}}>
        <img className="menuu" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+props.details.card.info.imageId}/>
        <h3>{props.details?.card?.info?.name}</h3>
        <h4>{"Price: "+props.details.card.info.price/100}</h4>
        <h4>{props.details.card.info.isVeg===1?"Veg":"NonVeg"}</h4>
        <h4>{props.details.card.info.isVeg===1?<div className="veg"></div>:<div className="nonveg"></div>}</h4>
    </div>

    )
};
export default Menucard;