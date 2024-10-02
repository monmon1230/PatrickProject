
import { AppBarr } from "./Components/AppBar";
import {BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Home from "./Components/Home";
import Learn from "./Components/Learn/Learn";
import SignupContainer from "./Components/Signup/SignupContainer";
import { Container } from "react-bootstrap";
import LEADERPAGE from "./Components/LEADER/LEADERPAGE";





const App=()=> {
 return(

  

 
  <Router>
  <AppBarr/>
  <Container>
  <Routes>
   
    <Route path="/" element={<Home/>}/>
    <Route path="/learn" element={<Learn/>}/>
    <Route path="/signup" element={<SignupContainer/>}/>
    <Route path="/leader" element={<LEADERPAGE/>}/>
  
  </Routes>
  </Container>
  </Router>



 )
}

export default App;
