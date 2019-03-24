<<<<<<< HEAD
import React, { Component } from "react";
import "./App.css";
import EventDashboard from "../../features/components/event/EventDashboard";
import NavBar from "../../features/components/navigation/NavBar";
import { Container } from "semantic-ui-react";
class App extends Component {

=======
import React, { Component } from 'react';
import './App.css';

class App extends Component<{},{}> {
>>>>>>> 0dce53dd39505306d213776d8c0443c38918b929
  render() {
    return (
      <div>
        <NavBar />
        <Container className="main">
          <EventDashboard />
        </Container>
      </div>
    );
  }
}

export default App;
