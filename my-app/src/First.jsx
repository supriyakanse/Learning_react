import { useEffect, useState } from "react";
import Second from "./Second";
import Third from "./Third";

const First=()=>{
    let [count,setCout]=useState(0)
    useEffect(()=>{
        console.log("useeffect executing of first compu")
    },[count])
    const counterInc=()=>{
        setCout(++count);
    }
    const counterDec=()=>{
        setCout(--count);
    }
    return (
        <>
        {console.log("first compo rendering")}
        <h2>First</h2>
        <h3>{count}</h3>
        <button onClick={counterInc}>+</button>
        <button onClick={counterDec}>-</button>

        <Second count={count}/>
        <Third></Third>
        </>
    )
}
export default First;