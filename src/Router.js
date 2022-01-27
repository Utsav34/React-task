import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Dashboard,AboutUs, Contact, Login, LoginProfile, ModalPage, Signup, Loginup } from "./page/index";
import { PageError} from "./components/index";
// import { ThemeProvider } from "./page/theme";


const Router = (props) =>{
    // console.log("my data is",props.persondata)
   

    return(
        <>
        <BrowserRouter>
        {/* <nav>
            <Link to ="/">Modal</Link>
            <Link to ="/aboutus">AboutUs</Link>
            </nav> */}
      <Routes>
   
      {/* <ThemeProvider> */}
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<ModalPage/>} />
          <Route path="/logindata" element={<LoginProfile />} />

            <Route path="/Dashboard" element={<Dashboard/>} />
            <Route path="/Contact/" element={<Contact/>} />
            <Route path="/aboutUs"  element={<AboutUs {...props} />} />
            {/* <Route path="/home" element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        /> */}

            <Route path="/signup" element={<Signup />} />
          <Route path="/loginup" element={<Loginup />} />
            <Route path="*" element={<PageError/>}/>
            {/* </ThemeProvider> */}
        </Routes>
        </BrowserRouter>
        </>     
    )
}
export default Router;