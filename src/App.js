import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import Graphs from './components/graphs';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/graphs" component={Graphs} />
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
