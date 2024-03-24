import { useEffect } from "react";
import React from "react";
const Second=(props)=>{
    useEffect(()=>{
        console.log("useeffect executing of second compu")
    },[])
    return (
        <>
        {console.log("second compu rendering")}
        <h2>Second {props.count}</h2>
        </>
    )
}
export default React.memo(Second);