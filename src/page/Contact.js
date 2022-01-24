import {UserName} from "../components/styles";
import { Header } from "../module/index";
import  {Hello, Demo} from "../components/index";
import Selfcounter from "../components/selfcounter";

// import { useState } from "react";

const Contact =()=>{
    return(
        <>
        <Header/>
        <Hello/>
<UserName>Counter with self-initiating and stop at 20 </UserName>
<Selfcounter/>
<Demo text="hello props"/>
<Demo/>

</>
)   
}
export default Contact;