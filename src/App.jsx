import React from 'react'
import Navbar from './componenets/Navbar'
import Home from './componenets/Home'
import About from './componenets/About';
import PortFolio from './componenets/Portfolio';
import Experiance from './componenets/Experiance';
import Footer from './componenets/Footer';
import Contact from './componenets/Contact';
import { Toaster } from "react-hot-toast";
 function App() {
  return (
    <>
    <div>
    <Navbar/>
    <Home/>
    <About/>
    <PortFolio/>
    <Experiance/>
    <Contact/>
    <Footer/>
    </div>

    <Toaster />
    </>
  );
}


export default App;
