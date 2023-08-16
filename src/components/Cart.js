import { useDispatch, useSelector } from "react-redux";
import Items from "./Items";
import { clearCart, removeItems } from "../utils/cartslice";
import { Link } from "react-router-dom";
const Cart=()=>{
    const cartitems=useSelector((store)=>store.cart.items)
    console.log('newww',cartitems)
    const dispatch=useDispatch()
    const handleClick=()=>{
        dispatch(clearCart())
    }
    const handlepop=()=>{
        dispatch(removeItems())
    }
    return(
        <div className="text-center">
            <div className="bg-slate-300 p-4 w-6/12 mx-auto rounded-xl">
            <h1 className="font-bold  mt-4 mx-4 p-4 text-2xl">Cart</h1>   
            <button className="p-2 mb-4 bg-slate-500 rounded-lg text-xs m-2 font-bold" onClick={handleClick}>ClearCart</button>        
            <button className="p-2 mb-4 bg-slate-500 rounded-lg text-xs font-bold" onClick={handlepop}>RemoveItem</button>
            <div className="  bg-slate-400 p-4 rounded-xl">
                {cartitems.length===0?<Link to='/'>Please shop</Link>:cartitems.map((e)=><Items details={e} />)}
            </div>
            </div>
        </div>
    )
}
export default Cart;