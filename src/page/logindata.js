import { useLocation } from "react-router";
import { Header } from "../module";
import { useNavigate } from "react-router-dom"


const LoginProfile = () =>{
    const location = useLocation();
    let LoginData = location.state;
    let navigator = useNavigate();
    // const redirectLogin = () => {
    //     navigator('/')
    // }
    return(
        <>
          <Header/>
        <h3>Username :{LoginData.users.name} </h3>
        <h3>password : {LoginData.users.password}</h3>
        </>
    )
}
export default LoginProfile;