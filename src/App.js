import './App.css';
import Home from './pages/home/Home';
import Menu from './pages/menu/Menu';
import Cart from './pages/cart/Cart';
import { useEffect } from 'react';
import { APPEAR_DIST, Y_DISP } from './hooks/useFadeEffect';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.paddingBottom = (Y_DISP + APPEAR_DIST) + "px";
  }, [])

  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/menu' component={Menu} />
          <Route exact path='/cart' component={Cart} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
