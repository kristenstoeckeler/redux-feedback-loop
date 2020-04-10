import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Thanks from '../Thanks/Thanks';
import Admin from '../Admin/Admin';

import { HashRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
      <Router>
        <div className="App">
            <header className="App-header">
              <h1 className="App-title">Feedback!</h1>
              <h4><i>Don't forget it!</i></h4>
            </header>

            <Route exact path="/" component={Feeling} /> 
            <Route path="/understanding" component={Understanding} />
            <Route path="/support" component={Support} />
            <Route path="/comments" component={Comments} />
            <Route path="/review" component={Review} />
            <Route path="/thank-you" component={Thanks} />
            <Route path="/admin" component={Admin} />
        </div>
      </Router>   
      </>
    );
  }
}

export default App;
