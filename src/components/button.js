import {Btn} from "./styles"
const Button = (props) =>{
    return(
     <>
        <Btn color="red">{props.ButtonText}</Btn><br/><br/>
        <Btn color="Green">{props.ButtonText}</Btn>
       
     </>
    )
}

export default Button;