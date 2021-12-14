import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Subscribe from "../pages/Subscribe/Subscribe";
import Contact from "../pages/Contact/Contact";

function RoutesMenu() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={ <Home/> } /> 
        <Route path="/subscribe" element={ <Subscribe/> } /> 
        <Route path="/contact" element={ <Contact/> } /> 
      </Routes>
    </Router>
  );
}

export default RoutesMenu;