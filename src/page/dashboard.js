import { Heading } from "../components/styles";
import {Button, Counter, CounterTime, Modal} from "../components/index";
import { Header } from "../module/index";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom"


const Dashboard = () =>{
 
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
        <Button  ButtonText= "click the Button" Buttonclass="variant"/>
        <button onClick={()=>navigation('/')}>goto Modal Page</button>
        <Counter/>
        <CounterTime/>  
        {/* <button onClick={redirectLogin}>Logout</button> */}
        </>
    )
}

export default Dashboard;