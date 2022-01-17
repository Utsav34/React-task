import {UserName} from "../components/styles";
import { Header } from "../module/index";
import {Button} from "../components/index";
import Selfcounter from "../components/selfcounter";

import { useState } from "react";

const Contact =()=>{
    return(
        <>
        <Header/>
<UserName>Counter with self-initiating and stop at 20 </UserName>
<Selfcounter/>
</>
)    
}
export default Contact;