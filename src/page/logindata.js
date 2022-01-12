import { useLocation } from "react-router";
import { Header } from "../module";

const LoginProfile = (props) =>{
    const location = useLocation();
    let LoginData = location.state;
   
    return(
        <>
          <Header/>
        <h3>Username :{LoginData.users.name} </h3>
        <h3>password is: {LoginData.users.Password}</h3>
        </>
    )
}
export default LoginProfile;