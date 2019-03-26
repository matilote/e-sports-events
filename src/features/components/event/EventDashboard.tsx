import React, { Component } from "react";
import EventList from "./EventList";
import EventForm from "./forms/EventForm";
import { eventDashboard } from "../navigation/eventData";
import { Grid, Button } from 'semantic-ui-react';
import cuid from 'cuid';
interface IEventsState {
  events: any;
  isOpen: boolean;
  selectedEvent: any
}
class EventDashboard extends Component<{}, IEventsState> {

  constructor(props: any) {
    super(props);
    this.state = {
      events: eventDashboard,
      isOpen: false,
      selectedEvent: null
    };
  }

  render(): JSX.Element {
    const {selectedEvent} = this.state;
    return (
      <Grid>
        <Grid.Column width={8}>
          <EventList onEventEdit={this.handleEditEvent} events={this.state.events} />
        </Grid.Column>
        <Grid.Column width={4}>
          <Button
            onClick={this.handleFormOpen}
            positive
            content="Create Event"
          />
          {this.state.isOpen && <EventForm selectedEvent={selectedEvent} createEvent={this.handleCreateEvent} handleFormOpen={this.handleFormOpen}/>}
        </Grid.Column>
        <Grid.Column width={4}>
          <h2>Right Colum</h2>
        </Grid.Column>
      </Grid>
    );
  }

  private handleFormOpen = (): void => {
    this.setState({
      selectedEvent: null,
      isOpen: !this.state.isOpen
    });
  };

  private handleCreateEvent = (newEvent: any): void => {
    newEvent.id = cuid()
    newEvent.hostPhotoURL = '/assets/user.png'
    const updatedEvents = [...this.state.events, newEvent]
    this.setState({
      events: updatedEvents,
      isOpen: false
    })
  }

  private handleEditEvent = (eventToUpdate: any) => (): void => {
    this.setState({
      selectedEvent: eventToUpdate,
      isOpen: true
    })
  }
}

export default EventDashboard;
