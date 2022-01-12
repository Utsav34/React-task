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
height: 70px;
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
margin-left: 450px;
 width : 110px;
 height: 50px;
 margin-top: 25px;
 color : white;
 
`
// export const Stdhead  = styled.h1`
// text-align : center;
// font-size: 40px;
// `

// export const form = styled.div`
// border: 3px solid #f1f1f1;   
// `
// export const container = styled.div`
// padding: 25px;   
// background-color: lightblue;  
// `

// export const DataField = styled.input`
//         width: 30%;   
//         margin: 8px 0;  
//         padding: 12px 20px;   
//         display: block;   
//         border: 2px solid green;   
//         box-sizing: border-box;   
//         margin-left: 450px;
//         background-color: lightwhite;
//         `
      //   export const Mybutton = styled.div`
      //   // background-color: #4CAF50;   
      //   background-color: black;
      //  width: 5%;  
      //   color: white;   
      //   padding: 15px;   
      //   margin: 10px 0px;   
      //   border: none;   
      //   cursor: pointer;  
      //   margin-left: 450px; 
      // 
      
      // `
      // export const Mylabel = styled.div`
      // margin-left: 450px;
      // padding-top: 20px;
      // `


      export const Cbutton = styled.button`
     background-color: black;
      color:white;
      width: 110px;
      height: 50px;
      margin-left: 450px;
      `
      
      export const InputField = styled.input`
              width: 30%;   
              margin: 15px ;  
              padding: 10px 10px;   
              display: block;   
              border: 2px solid grey;   
              box-sizing: border-box;   
              margin-left: 450px;
              margin-top: 20px;
              `
              export const Mylabel = styled.div`
              margin-left: 450px;
              color: black;
      
              `
     export const Stdh1 = styled.h1`
     margin-left: 450px;
     `