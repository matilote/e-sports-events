import React, { Component } from "react";
import "./App.css";
import EventDashboard from "../../features/components/event/EventDashboard";
import NavBar from "../../features/components/navigation/NavBar";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import EventDetailedPage from "../../features/components/event/EventDetailedPage";
import PeopleDashboard from "../../features/components/user/PeopleDashboard/PeopleDashboard";
import UserDetailedPage from "../../features/components/user/UserDetails/UserDetailedPage";
import SettingsDashboard from "../../features/components/user/Settings/SettingsDashboard";
import EventForm from "../../features/components/event/forms/EventForm";
import HomePage from "../../features/components/home/HomePage";

class App extends Component<{}, {}> {
  render(): JSX.Element {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
        <Route path="/(.+)" render={() => (
          <div>
          <NavBar />
          <Container className="main">
            <Switch>
              <Route path="/events" component={EventDashboard} />
              <Route path="/event/:id" component={EventDetailedPage} />
              <Route path="/people" component={PeopleDashboard} />
              <Route path="/profile/:id" component={UserDetailedPage} />
              <Route path="/settings" component={SettingsDashboard} />
              <Route path="/createEvent" component={EventForm} />
            </Switch>
          </Container>
        </div>
        )}/>  
      </div>
    );
  }
}

export default App;
