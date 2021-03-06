import './assets/App.css';
import './assets/Login.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from "./components/pages/HomePage";
import SobreNosotros from "./components/pages/SobreNosotros";
import Contactos from "./components/pages/Contactos";
import Precios from "./components/pages/Precios";
import Servicios from "./components/pages/Servicios"
import NavBar from "../src/components/navbar"
import Footer from "./components/footer"
import Login from './components/pages/Login';
import Register from './components/pages/register'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<SobreNosotros />} />
        <Route path="/Contact" element={<Contactos />} />
        <Route path="/Prices" element={<Precios />} />
        <Route path="/Services" element={<Servicios />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
