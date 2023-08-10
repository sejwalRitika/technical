import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from './Home';
import Navbar from "./Navbar";
import Service from "./Service";
const App = () =>{
return(
<>
<Navbar/>
<Routes>
<Route path="/" Component={Home}/>
<Route path="/about" Component={About}/>
<Route path="/service" Component={Service}/>
<Route path="/contact" Component={Contact}/>
</Routes>
<Footer/>
</>
);
};

export default App ; 