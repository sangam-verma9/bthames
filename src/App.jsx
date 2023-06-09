import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import  Home  from "./Home";
import Services from "./Services"
import About from "./About"
import Contect from "./Contect";
import Feedback from "./Feedback";
import Footer from "./Footer";
import Login from "./Login";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Register from "./Register";
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
const App =()=>{
  return(
    <> <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/bthames" element={<Home/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contect" element={<Contect/>} />
        <Route path="/feedback" element={<Feedback/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
      <Footer/>
    </>
  )
}
export default App;