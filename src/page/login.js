// import { Form,Button } from "../components/index";
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import  Profile  from "./logindata";
import { InputField, Mylabel, Stdh1, Cbutton } from '../components/styles';
import { Header } from "../module";
const LoginPage =()=>{

    const [users,setUsers] =useState(
        {
            name: "",
            Password:"",
        }
    )
    let navigate = useNavigate();
    const HandleChange =() =>{
      setUsers({
            ...users,
            name:document.getElementById("name").value,
            Password:document.getElementById("password").value,

        })
    }
    let data = users;
    const redirectHandler =() =>{
        navigate('/logindata',{state: {users}})
    }

    return(
        <>
        <Header/>
             <div>
                 <Stdh1> Student Login Form </Stdh1>
             <Mylabel>Username:</Mylabel>
             <InputField type="text" id="name" placeholder="Enter Username" onChange={HandleChange}/>  
             <Mylabel>Password:</Mylabel> 
             <InputField type="password" id="password" placeholder="Enter Password" onChange={HandleChange}  />  
             <Cbutton onClick={redirectHandler}> Submit</Cbutton>
         </div>
        </>
    )
}

export default LoginPage;