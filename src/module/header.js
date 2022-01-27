import { DashAnchor,Ul,Li } from "../components/styles";
import {Nav, NavDropdown} from 'react-bootstrap'

import {useNavigate} from "react-router";
// import { ThemeContext } from "@mui/styled-engine";

const Header = () =>{
const navigator = useNavigate();

    const user= JSON.stringify(localStorage.getItem('userDetails'))
    function logout(){
        localStorage.clear();
        navigator('/signup')

    }
    
    
    return(
        <>
        {/* <ThemeContext.Provider value={theme.dark}> */}
            <Ul>
                {
                    localStorage.getItem('userDetails')?
                    <>
                
                {/* <Li><a href="./Login">Login</a></Li> */}
                <Li><a href="./Dashboard">Dashboard</a></Li>
                <Li><a href="./Contact" >Contact</a></Li>
                <Li><a href="/aboutUs">About us</a></Li>
                {/* <Li><a href="./LoginProfile">logindata</a></Li> */}
               
             </>
             :
             <>
                <Li><a href="/signup">Signup</a></Li>
                <Li><a href="./loginup">Loginup</a></Li>
                <Li><a href="./">Modal</a></Li>
                </>
}
            </Ul>
           {localStorage.getItem('userDetails') ?

           <Nav>
                 <NavDropdown title="logout">
                 <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                 </NavDropdown>
             </Nav>
             : null
 } 
         {/* </ThemeContext.Provider> */}
        </>
    )
}

export default Header;