import { Heading } from "../components/styles";
import {Button, Counter, CounterTime, Modal} from "../components/index";
import { Header } from "../module/index";
import { ModalPage } from ".";
import { useNavigate } from "react-router";
const Dashboard = () =>{
    const navigation = useNavigate();
    return(
        <>
        <Header/>
        <Heading><marquee>Welcome to dashboard</marquee></Heading>
        <Button  ButtonText= "click the Button" Buttonclass="variant"/>
        <button onClick={()=>navigation('/')}>goto Modal Page</button>
        <Counter/>
        <CounterTime/>
        
       
        </>
    )
}

export default Dashboard;