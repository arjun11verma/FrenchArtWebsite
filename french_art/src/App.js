import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import HomePage from './HomePage'
import QuizPage from './QuizPage'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = "/" component = {HomePage}/>
        <Route exact path = "/QuizPage" component = {QuizPage}/>
      </Switch>
    </BrowserRouter>
    );
}

export default App;
