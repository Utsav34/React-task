import { Heading } from "../components/styles";
import { Header } from "../module/index";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom"
import Get from "../api/get";


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
        <Get/>
        {/* <Button  ButtonText= "click the Button" Buttonclass="variant"/>
        <button onClick={()=>navigation('/')}>goto Modal Page</button> */}
        {/* <Counter/>
        <CounterTime/>   */}
        </>
    )
}

export default Dashboard;