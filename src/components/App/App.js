import React, { Component } from 'react';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Thanks from '../Thanks/Thanks';
import Admin from '../Admin/Admin';

import { HashRouter as Router, Route} from "react-router-dom";


//giving routes for each "page" of form
class App extends Component {
  render() {
    return (
      <>
      <Router>
        <div className="App">
            <header className="App-header">
              <h1 className="App-title">Feedback Survey</h1>
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
