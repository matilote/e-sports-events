import React, { Component } from "react";
import "./App.css";
import EventDashboard from "../../features/components/event/EventDashboard";
import NavBar from "../../features/components/navigation/NavBar";
import { Container } from "semantic-ui-react";
class App extends Component {

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
