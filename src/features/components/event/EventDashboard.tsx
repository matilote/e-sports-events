import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import EventList from "./EventList";
import EventForm from "./forms/EventForm";
import { eventDashboard } from "../navigation/eventData";

interface IEventsState {
  events: any;
  isOpen: boolean;
}

class EventDashboard extends Component<{}, IEventsState> {
  constructor(props: any) {
    super(props);

    this.state = {
      events: eventDashboard,
      isOpen: false
    };
  }

  render() {
    return (
      <Grid>
        <Grid.Column width={8}>
          <EventList events={this.state.events} />
        </Grid.Column>
        <Grid.Column width={4}>
          <Button
            onClick={this.handleFormOpen}
            positive
            content="Create Event"
          />
          {this.state.isOpen && <EventForm handleFormOpen={this.handleFormOpen}/>}
        </Grid.Column>
        <Grid.Column width={4}>
          <h2>Right Colum</h2>
        </Grid.Column>
      </Grid>
    );
  }

  private handleFormOpen = (): void => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
}

export default EventDashboard;
