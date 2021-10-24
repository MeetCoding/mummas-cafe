import './App.css';
import Hero from './components/hero/Hero';
import Intro from './components/Intro';
import Goals from './components/Goals';
import Awards from './components/Awards';
import { useEffect } from 'react';
import { APPEAR_DIST, Y_DISP } from './hooks/useFadeEffect';

function App() {

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.paddingBottom = (Y_DISP + APPEAR_DIST) + "px";
  }, [])

  return (
    <div className='app'>
      <Hero />
      <Intro />
      <Goals />
      <Awards />
    </div>
  );
}

export default App;
