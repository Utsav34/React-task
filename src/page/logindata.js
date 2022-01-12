import { useLocation } from "react-router";
import { Header } from "../module";

const Profile = (props) =>{
    const location = useLocation();
    let LoginData = location.state;
   
    return(
        <>
          <Header/>
        <h1>welcome :{LoginData.users.name} </h1>
        <h3>password is: {LoginData.users.Password}</h3>
        </>
    )
}
export default Profile;