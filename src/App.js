import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Decks from './components/Decks';
import Error from './components/Error';
import Question from './components/Question';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Decks />
        </Route>
        <Route path='/review/:deck'>
          <main>
            <Question />
          </main>
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
