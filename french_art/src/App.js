import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import HomePage from './HomePage'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = "/" component = {HomePage}/>
      </Switch>
    </BrowserRouter>
    );
}

export default App;
