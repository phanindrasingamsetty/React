import { createSlice } from "@reduxjs/toolkit";

const cartslice=createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    reducers:{
        addItems:(state,action)=>{
            state.items.push(action.payload)
        },
        removeItems:(state)=>{
            state.items.pop()
        },
        clearCart:(state)=>{
            state.items.length=0
        }
    }
})
console.log("cartslice:",cartslice)
export const {addItems,removeItems,clearCart}=cartslice.actions;
export default cartslice.reducer;