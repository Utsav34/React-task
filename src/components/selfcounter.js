import { useEffect, useState } from "react";
import {Counth1} from "./styles"
const SelfCounter =()=>{
    const [count,setCount] =useState(0);
    const counter =()=>{
        let y= 0;
        const interval = setInterval(()=>{
            if(y<3){
                y= y+1;
            }

            else{
                y=0
                clearInterval(interval);
            }
            setCount(y);
        },1000)
    }
    useEffect(()=>{
        counter();
    },[])
    return(
        <>
            <Counth1>{count} </Counth1>
        </>
    )
}
export default SelfCounter;