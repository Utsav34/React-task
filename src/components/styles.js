import styled, {StyleComponents} from "styled-components";

export const Heading = styled.h1`
    color:Blue;
    text-align: center;
`

export let HeaderPart = styled.header` 

background-color: rgb(99,110,132);
// background-color : green;

height: 350px;
position: relative;   
`
const Head = styled.div`
 background-color:blue;
 font-size:50px;
 height:300px;
  
`
export const UserName = styled.h1`
color : blue;
font-size : 25px;
`


export const ImgPrs = styled.div`
position: absolute;
top: 55px;
left: 145px;
width: 280px;
height : 360px;
border: 1px solid white;`

export const TextPart = styled.div`
margin-left: 440px;
padding-top: 110px;`


export const Ul = styled.ul`
display: flex;
justify-content: space-around;
align-items: center;

// background-color: rgb(161 157 164);
background-color: lightgreen;
height: 50px;
`
export const Li = styled.li`
list-style: none;
`
export const DashAnchor = styled.li`
text-decoration: none;
color: Green;

`

export const Btn = styled.button`
 background-color: ${(props)=>props.color};
margin-left: 200px;
 width : 110px;
 height: 50px;
 
`
