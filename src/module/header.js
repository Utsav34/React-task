import { DashAnchor,Ul,Li } from "../components/styles";

const header = () =>{
    return(
        <>
            <Ul>
                <Li><a href="./Login">Login</a></Li>
                <Li><a href="./Dashboard">Dashboard</a></Li>
                <Li><a href="./Contact" >Contact</a></Li>
                <Li><a href="/aboutUs">About us</a></Li>
                <Li><a href="./LoginProfile">logindata</a></Li>
                <Li><a href="./modal">Modal</a></Li>
            </Ul>
        </>
    )
}

export default header;