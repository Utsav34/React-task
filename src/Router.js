import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Dashboard,AboutUs, Contact, Login, LoginProfile, ModalPage, Signup, Loginup, EditUser } from "./page";
import { PageError, PrivateRoute, PublicRoute} from "./components";
// import { ThemeProvider } from "./page/theme";
const Router = (props) =>{
    // console.log("my data is",props.persondata)
    return(
        <>
      <BrowserRouter>
      <Routes>
      {/* <ThemeProvider> */}
          <Route path="/login" element={<Login/>} />
          <Route path="/modal" element={<ModalPage/>} />
          <Route path="/logindata" element={<LoginProfile />} />
            <Route path="/Dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
            <Route path="/Contact/" element={<Contact/>} />
            <Route path="/aboutUs"  element={<AboutUs {...props} />} />
            <Route exact path="/editUser/:id" element={<EditUser/>} />
            <Route path="/" element={<PublicRoute><Signup /></PublicRoute>} />
          <Route path="/loginup" element={ <PublicRoute><Loginup /></PublicRoute>} />
            <Route path="*" element={<PageError/>}/>
            {/* </ThemeProvider> */}
        </Routes>
        </BrowserRouter>
        </>     
    )
}
export default Router;