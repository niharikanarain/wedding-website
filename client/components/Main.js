import React, { Component } from 'react';
import Navbar from './Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import RSVP from './RSVP'
import Proposal from './Proposal'
import WeddingParty from './WeddingParty'
import Travel from './Travel'

export default class Main extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/rsvp-events" component={ RSVP } />
            <Route exact path="/proposal" component={ Proposal } />
            <Route exact path="/wedding-party" component={ WeddingParty } />
            <Route exact path="/travel" component={ Travel } />
          </Switch>
        </div>
      </Router>
    )
  }
}
