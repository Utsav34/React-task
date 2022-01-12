import React, { useState } from "react";
import { Stdhead, DataField,  Mylabel} from "../components/styles";
import { useNavigate } from 'react-router-dom';
import { Header } from "../module/index";
import {Button} from "../components/index";

const Login =(props)=>{
    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

const[allEntry, setAllEntry]= useState([]);

const submitForm=(e)=>{
    e.preventDefault();
    const newEntry = {email: email, password:password};
    setAllEntry([ newEntry]);
    console.log(allEntry);

}

    // console.log("login data",props.data)
    return(
        <>
        <Header/>
{/* <LoginName>Enter your Name :</LoginName>
<Button ButtonText=" click the Button" Buttonclass="variant" /> */}

{/* <Stdhead> Student Login Form </Stdhead>  */}
<Stdhead>{props.data.heading}</Stdhead>

    <form action="#"  onSubmit={submitForm}>  
       
            <Mylabel>Username : </Mylabel>   
            <DataField type="text" placeholder="Enter Username" name="username" value={email} required 
            onChange={(e) => setEmail(e.target.value)}
            />  
            <Mylabel>Password : </Mylabel>   
            <DataField type="password" placeholder="Enter Password" name="password"  value={password} 
                      onChange={(e) => setPassword(e.target.value)}
            required/>  
            {/* <LButton   Buttontype="submit">Login</LButton>    */}
            <Button  onClick={() => navigate("/Contact")} ButtonText=" Login"  Buttonclass="variant" />
            
            </form>
<div>

{
    allEntry.map((curElem) => {
        return(
            <div className="showData">
                <p>{curElem.email}</p>
                <p>{curElem.password}</p>
            </div>
        )
    })
}
</div>


</>

    )
}
export default Login;