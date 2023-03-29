import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Selector from './Components/Selector/Selector';
import Services from './Components/Services/Services';
import Fleet from './Components/Fleet/Fleet';

export default function App() {
  return (
    <div className='app'>
      <Header />
      <Hero />
      <Selector />
      <Services />
      <Fleet />
    </div >
  );
}

