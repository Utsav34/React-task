import React from "react";

const Validation =(values)=> {

    let errors={};

    if(!values.name){
        errors.name= "Name is required";
    }else if  (/^[A-Za-z. ]{3,30} $/.test(values.name)){

    }
    if(!values.email){
        errors.email = "Email is required";
    }else if(/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/.test(values.email)){
        errors.email = "Email is invalid";
    }
    
    if(!values.password){
        errors.password= "Password is required";
    } else if( /^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/.test(values.password.length <8)){
        errors.password = "Password must be more than eight characters";
    }

    return errors;
};

export default Validation;