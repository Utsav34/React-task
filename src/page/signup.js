// import * as React from 'react';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { Header } from "../module/index";
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useLocation, useNavigate} from "react-router";
import { Validation  } from '../components/index';


const Signup=()=>{

  // useEffect(()=>{
  //   if(localStorage.getItem('userDetails')){
  //     navigator('./signup')
  //   }
  // },[])

  const navigator = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

// const [values, setValues]= useState({
//   name: "",
//   email: "",
//   password: "",
// });

// const [errors, setErrors]= useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // setErrors(Validation(values));
    console.log(name, email, password);
    const details = {name:name, email:email, password:password}

    let registerDetails = localStorage.getItem('userDetails');
    if(registerDetails==null){
      registerDetails=[]
      registerDetails.push(details);
      localStorage.setItem('userDetails',JSON.stringify(registerDetails))
    }else{
      let newDetail = JSON.parse(registerDetails)
      newDetail.push(details)
      e.preventDefault();
      localStorage.setItem("userDetails",JSON.stringify(newDetail))
      const message = "Registered Successfully";
      // // navigator('./l')
      navigator('/loginup',{state:message})
    };

    }
  

    const handleClose=()=>{
      setName('');
      setEmail('');
      setPassword('')
  }
  const paperStyle={padding: "10px 20px", width:350, margin:"0px auto"}
 
  return (
 <>

 <Header/>

 

<Paper elevation={20} style={paperStyle} >
{/* {" "}
          {loginup ? ( */}
     

      <Container component="main" maxWidth="xs" onSubmit={handleSubmit}>
      
        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
             
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
         
          </Avatar>
         
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField sx={{backgroundColor: 'lightgrey'}}
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              value={name}
             
              onChange={e => setName(e.target.value)}
              autoComplete="name"
              autoFocus
            />
               {/* {errors.name && <p className="error">{errors.name}</p>} */}

            <TextField sx={{backgroundColor: 'lightgrey'}}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              // validate={validateEmail}
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoComplete="email"
              autoFocus
            />
           
             {/* {errors.email && <p className="error">{errors.email}</p>} */}

            <TextField sx={{backgroundColor: 'lightgrey'}}
            
            
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
             
            
              autoComplete="current-password"
            />
               {/* {errors.password && <p className="error">{errors.password}</p>} */}
         
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
      
            <Button
              type="submit"
              
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             
              Sign Up
            </Button>
         
          </Box>
        </Box>
      
       

      </Container>
     
      </Paper>
 
{/* </form> */}

                             
</>
          
  
  );

}

export default Signup;