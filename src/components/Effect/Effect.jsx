import { useState,useEffect } from "react";
function Effect()
{
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    console.log("rendered");
    useEffect(()=>{
        console.log("mounted");
    },[]);
    return (
        <div>
            <button onClick={()=>{setCount(count+1)}}>Add</button>
            <p>{count}</p>
            <button onClick={()=>(setCount1(count1+1))}>Add1 </button>
            <p>{count1}</p>
        </div>
    )
}
export default Effect;

// empty dependensry array => only once
// no dependasy array => mounting + rerendering  
// if statevariables=> only on change of that state variable 
 