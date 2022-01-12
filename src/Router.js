import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Dashboard,AboutUs, Contact, Login, Profile} from "./page/index";

const Router = (props) =>{
    console.log("my data is",props.persondata)
    return(
        <>
        <BrowserRouter>
        
      <Routes>
          <Route path="/Login" element={<Login data={props.persondata}/>} />
      
          <Route path="/logindata" element={<Profile />} />
      
            <Route path="/Dashboard" element={<Dashboard/>} />
      
            <Route path="/Contact" element={<Contact/>} />
       
            <Route path="/aboutUs"  element={<AboutUs data={props.persondata} />} />
        </Routes>
        </BrowserRouter>

        </>
        
    )
}

export default Router;