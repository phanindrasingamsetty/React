import { useEffect, useState } from "react";

const getOnlineStatus=()=>{
    [onlinestat,setOnlinestat]=useState(true)
    useEffect(()=>{
        window.addEventListener("online",()=>setOnlinestat(true));
    window.addEventListener("offline",()=>setOnlinestat(false));
    })
    return onlinestat;
}
export default getOnlineStatus;