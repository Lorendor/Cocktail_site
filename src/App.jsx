import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Cocktails from './components/Cocktails.jsx';
import About from './components/About.jsx';
import Art from './components/Art.jsx';
import Menu from './components/Menu.jsx';
import Kontakt from './components/Kontakt.jsx';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
 
  return (
    <main>
        <Navbar/>
        <Hero/>
        <Cocktails/>
        <About/>
        <Art/>
        <Menu/>
        <Kontakt/>
    </main>

  )
}

export default App
