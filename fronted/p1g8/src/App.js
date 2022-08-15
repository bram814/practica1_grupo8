import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { HOME, PAROIMPAR, fibo } from "./Config/env";
import Navbar from "./Component/Navbar";
import Home from "./Component/Page/Home";
import Problema1 from './Component/Page/Problema1';
import Problema2 from './Component/Page/Problema2';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>

        <Route path={HOME} exact component={Home} />
        <Route path={PAROIMPAR} component={Problema1} />
        <Route path={fibo} component={Problema2} />

      </Switch>
      
    </BrowserRouter>
    
  );
}

export default App;
