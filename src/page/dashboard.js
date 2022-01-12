import { Heading } from "../components/styles";
import {Button, Counter, CounterTime} from "../components/index";
import { Header } from "../module/index";
const Dashboard = () =>{
    return(
        <>
        <Header/>
        <Heading><marquee>Welcome to dashboard</marquee></Heading>
        <Button ButtonText= "click the Button" Buttonclass="variant" />
        <Counter/>
        <CounterTime/>
       
        </>
    )
}

export default Dashboard;