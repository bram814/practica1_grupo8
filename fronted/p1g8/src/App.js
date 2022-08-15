import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { HOME, PAROIMPAR, fibo, ALREVEZ, POTENCIA } from "./Config/env";
import Navbar from "./Component/Navbar";
import Home from "./Component/Page/Home";
import Problema1 from './Component/Page/Problema1';
import Problema2 from './Component/Page/Problema2';
import Problema3 from './Component/Page/Problema3';
import Problema4 from './Component/Page/Problema4';


import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>

        <Route path={HOME} exact component={Home} />
        <Route path={PAROIMPAR} component={Problema1} />
        <Route path={fibo} component={Problema2} />
        <Route path={ALREVEZ} component={Problema3} />
        <Route path={POTENCIA} component={Problema4} />
      </Switch>
      
    </BrowserRouter>
    
  );
}

export default App;
