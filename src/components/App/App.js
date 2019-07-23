import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from '../Misc/Header/Header';
import HomePage from '../Misc/HomePage/HomePage';
import Movie from '../Misc/Movie/Movie'
import NotFound from '../Misc/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/:movieId" component={Movie} exact />
            <Route component={NotFound} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
