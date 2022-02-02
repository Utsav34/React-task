import { Heading } from "../components/styles";
import { Header } from "../module/index";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import { Adduser} from "../components/index";
import AllUsers from "../api/alluser";

const Dashboard =()=>{
    const location = useLocation();
    const myName =location.state
    console.log(location)

        // const location = useLocation();
        // let myData = location.state;
        // let navigator = useNavigate();
        // const redirectLogin = () => {
        //     navigator('/')
        // }
    const navigation = useNavigate();
    return(
        <>
        <Header/>
        
        <Heading><marquee>Welcome to dashboard</marquee></Heading>
        <Adduser/>
        <AllUsers/>
        {/* <Try/> */}
        
        {/* <Get/> */}
        {/* <Button  ButtonText= "click the Button" Buttonclass="variant"/>
        <button onClick={()=>navigation('/')}>goto Modal Page</button> */}
        {/* <Counter/>
        <CounterTime/>   */}
        </>
    )
}
export default Dashboard;