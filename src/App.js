import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Selector from './Components/Selector/Selector';
import Services from './Components/Services/Services';
import Fleet from './Components/Fleet/Fleet';
import SaveBig from './Components/SaveBig/SaveBig';
import ChooseUs from './Components/ChooseUs/ChooseUs';
import Testimonials from './Components/Testimonials/Testimonials';
import Faq from './Components/Faq/Faq';
import GooglePlay from './Components/GooglePlay/GooglePlay';
import Footer from './Components/Footer/Footer';

export default function App() {
  return (
    <div className='app'>
      <Header />
      <Hero />
      <Selector />
      <Services />
      <Fleet />
      <SaveBig />
      <ChooseUs />
      <Testimonials />
      <Faq />
      <GooglePlay />
      <Footer />
    </div >
  );
}

