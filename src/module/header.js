import { DashAnchor,Ul,Li } from "../components/styles";

const header = () =>{
    return(
        <>
            <Ul>
                <Li><a href="./">Home</a></Li>
                <Li><a href="./Dashboard">Dashboard</a></Li>
                <Li><a href="./Contact" >Contact</a></Li>
                <Li><a href="/aboutUs">About us</a></Li>
            </Ul>

        </>
    )
}

export default header;