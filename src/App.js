import React, {Component} from 'react';

import Header          from './containers/Header';
import Footer          from './containers/Footer';

import './App.css';
import './font.css';
import {Route, Switch} from "react-router-dom";
import Main            from "./containers/Main";
import RightWidget     from "./containers/RightWidget";
import Post            from "./components/Post";
import Introduce       from "./containers/Introduce";

class App extends Component {
  render(){
    return (
      <div>
          <div className="custom-background">
            <div>
              <Header />
              <div className="wide contenitor">
                <div className="site-contentbwrap container">
                  <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/:boardId" component={Main} />
                    <Route exact path="/post/:id" component={Post} />
                    <Route exact path="/introduce" component={Introduce} />
                  </Switch>
                  <RightWidget/>
                </div>
              </div>
              <Footer />
            </div>
          </div>

      </div>
    );
  }
}

export default App;
