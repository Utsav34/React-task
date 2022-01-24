import React from 'react'
// import { useLocation } from 'react-router';
import {useLocation } from "react-router-dom";
const Home=()=>{

    const location = useLocation();
    let Data = location.state;
return(
    <>
<h1>This is Private Page {Data.users.mail}</h1>

    </>
)


}

export default Home;