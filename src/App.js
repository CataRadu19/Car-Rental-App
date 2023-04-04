import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import ModelPage from './Pages/ModelPage';
import Testimonials from './Pages/TestimonialPage';
import OurTeamPage from './Pages/OurTeamPage';
import ContactPage from './Pages/ContactPage';


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/ModelPage" element={<ModelPage />} />
      <Route path="/Testimonials" element={<Testimonials />} />
      <Route path="/OurTeamPage" element={<OurTeamPage />} />
      <Route path="/ContactPage" element={<ContactPage />} />
    </Routes>
  );
}

