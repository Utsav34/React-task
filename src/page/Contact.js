import {UserName} from "../components/styles";
import { Header } from "../module/index";
import {Button} from "../components/index";
import Selfcounter from "../components/selfcounter";
import Demo from "../components/demo";
import { useState } from "react";

const Contact =()=>{

// const [show, setshow] = useState(false)

    return(
        <>
        <Header/>
<UserName>Counter with self-initiating and stop at 20 </UserName>
{/* <Button ButtonText=" click the Button" Buttonclass="variant" /> */}
<Selfcounter/>
{/* <Modal/> */}
{/* <div>
    <button onClick={() => setshow(true)}>Show Modal </button>
    <Demo onClose={()=> setshow(false)} show={show} />
<Demo show={show}/>
</div> */}

{/* <Demo/> */}
</>

    )

    
}
export default Contact;