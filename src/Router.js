import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Dashboard,AboutUs, Contact } from "./page/index";

const Router = (props) =>{
    console.log("my data is",props.persondata)
    return(
        <>
        <BrowserRouter>
      
       
        <Routes>
            <Route path="/Dashboard" element={<Dashboard/>} />
        </Routes>
        <Routes>
            <Route path="/Contact" element={<Contact/>} />
        </Routes>
        <Routes>
            <Route path="/aboutUs"  element={<AboutUs data={props.persondata} />} />
        </Routes>
        </BrowserRouter>

        </>
        
    )
}

export default Router;