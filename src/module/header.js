import * as React from 'react';
import {Nav, NavLink, NavMenu, NavBtn,NavBtnLink } from '../components/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
const Header = () => {
      const removeSession=()=>{
      localStorage.removeItem("getToken")
  }
  // const themes = useContext(ThemeContext);
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Nav>
                <NavMenu>
                     <NavLink to='/Dashboard' activeStyle>
                       Dashboard
                      </NavLink>
                      <NavLink to='/Contact' activeStyle>
                        Contact
                      </NavLink>
                     <NavLink to='/aboutUs' activeStyle>
                       About Us
                     </NavLink>
                     <NavLink to='/Modal' activeStyle>
                       Modal
                     </NavLink>
                   </NavMenu>
                    <NavBtn>
                      <NavBtnLink to="/" onClick={removeSession} >Logout</NavBtnLink>
                    </NavBtn>
                  </Nav>

        
     

         
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
