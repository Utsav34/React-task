import { BrowserRouter,Routes,Route, Link } from "react-router-dom";
import { Dashboard,AboutUs, Contact, Login, LoginProfile, ModalPage } from "./page/index";
import { PageError } from "./components/index";

const Router = (props) =>{
    console.log("my data is",props.persondata)
    return(
        <>
        <BrowserRouter>
        <nav>
            <Link to ="/">Modal</Link>
            <Link to ="/aboutus">AboutUs</Link>
            </nav>
      <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<ModalPage/>} />
          <Route path="/logindata" element={<LoginProfile />} />
            <Route path="/Dashboard" element={<Dashboard/>} />
            <Route path="/Contact/" element={<Contact/>} />
            <Route path="/aboutUs"  element={<AboutUs data={props.persondata} />} />
            <Route path="*" element={<PageError/>}/>
        </Routes>
        </BrowserRouter>
        </>     
    )
}
export default Router;