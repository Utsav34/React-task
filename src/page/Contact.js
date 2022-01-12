import {UserName} from "../components/styles";
import { Header } from "../module/index";
import {Button} from "../components/index";
import Selfcounter from "../components/selfcounter";

const Contact =()=>{

    return(
        <>
        <Header/>
<UserName>Enter your Name :</UserName>
{/* <Button ButtonText=" click the Button" Buttonclass="variant" /> */}
<Selfcounter/>
</>

    )
}
export default Contact;