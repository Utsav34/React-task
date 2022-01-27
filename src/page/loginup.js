// import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { Header } from "../module/index";
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Dashboard, Contact, AboutUs } from '../page/index';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


import React, { useState, useEffect } from 'react';

import { useLocation, useNavigate } from "react-router";

// function Loginup(props){
const Loginup=(props)=>{
 
  // useEffect(()=>{
  //   if(localStorage.getItem('userDetails')){
  //     navigator.push('./dashboard')
  //   }
  // },[])

const onSubmit = ()=>{
  props.navigator.push('./dashboard')
}





  const [email,setEmail] =useState();

  const navigator = useNavigate();
  const loc = useLocation();
  const message = loc.state;

  const userDetails = localStorage.getItem("userDetails")
  console.log("user",userDetails)

  const handleSubmit = (e) => {
      e.preventDefault();

      if(userDetails){
      navigator('/dashboard')
      }else{
        navigator('/dashboard')

      }
    };

    const handleClose=()=>{
     
    }
  const paperStyle={padding: "10px 20px", width:350, margin:"0px auto"}
  return (
 <>
 <Header/>
 
<Paper elevation={20} style={paperStyle} >
      <Container component="main" maxWidth="xs" onSubmit={handleSubmit}>
      <h1>{message}</h1>
        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            
          <Avatar sx={{ m: 2, bgcolor: 'blue' }}>
         
          </Avatar>
          <Typography component="h1" variant="h5">
           Login
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
          
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={onSubmit}
            >
             
              Login
            </Button>
       

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
         
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            
          </Box>
        </Box>
      
       
      </Container>
      </Paper>

</>
  
  
  );
  
}
  
export default Loginup;