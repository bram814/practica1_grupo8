import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { HOME, PAROIMPAR } from "./Config/env";
import Navbar from "./Component/Navbar";
import Home from "./Component/Page/Home";
import Problema1 from './Component/Page/Problema1';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>

        <Route path={HOME} exact component={Home} />
        <Route path={PAROIMPAR} component={Problema1} />

      </Switch>
      
    </BrowserRouter>
    
  );
}

export default App;
