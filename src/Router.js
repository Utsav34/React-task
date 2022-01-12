import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Dashboard,AboutUs, Contact, Login, LoginProfile} from "./page/index";

const Router = (props) =>{
    console.log("my data is",props.persondata)
    return(
        <>
        <BrowserRouter>
        
      <Routes>
          <Route path="/login" element={<Login data={props.persondata}/>} />
      
          <Route path="/logindata" element={<LoginProfile />} />
      
            <Route path="/Dashboard" element={<Dashboard/>} />
      
            <Route path="/Contact" element={<Contact/>} />
       
            <Route path="/aboutUs"  element={<AboutUs data={props.persondata} />} />
        </Routes>
        </BrowserRouter>

        </>
        
    )
}

export default Router;