import { Fragment } from 'react';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Freelancer from './Components/Freelancer';
import Home_sec from './Components/Home_sec';
import Navbar1 from './Components/Navbar1';
import Portfolio from './Components/Portfolio';
import Services from './Components/Services';
import Testinomial from './Components/Testinomial';
import Animation from './Components/Animation';
function App() {
  return (
    <Fragment>
      <Navbar1/>
      <Home_sec/>
      <Animation/>
      <About/>
      <Services/>
      <Freelancer/>
      <Portfolio/>
      <Testinomial/>
      <Contact/>
      <Footer/>
    </Fragment>
  );
}

export default App;
