import { DashAnchor,Ul,Li } from "../components/styles";
import {Nav, NavDropdown} from 'react-bootstrap'
import ThemeButton from "../components/themebutton"
import ThemeContext from "../page/themecontext"
import { useContext } from "react"

// import {useNavigate} from "react-router";
// import { ThemeContext } from "@mui/styled-engine";

const Header = () =>{    
const removeSession=()=>{
    localStorage.removeItem("getToken")
}
const themes = useContext(ThemeContext);
    return(
        <div style={themes.theme}>
            <Ul>   
                {/* <Li><a href="./Login">Login</a></Li> */}
                <Li><a href="./Dashboard">Dashboard</a></Li>
                <Li><a href="./Contact" >Contact</a></Li>
                <Li><a href="/aboutUs">About us</a></Li>
                {/* <Li><a href="./LoginProfile">logindata</a></Li> */}  
                {/* <Li><a href="/signup">Signup</a></Li>
                <Li><a href="./loginup">Loginup</a></Li> */}
                <Li><a href="./modal">Modal</a></Li>
                <Li><a href="/" onClick={removeSession} >Logout</a></Li>
            </Ul>
   

         {/* </ThemeContext.Provider> */}
        </div>
    )
}

export default Header;