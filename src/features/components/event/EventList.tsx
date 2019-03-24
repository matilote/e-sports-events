import React, { Component } from "react";
import EventListItem from "./EventListItem";

export interface EventProps {
  events: {
    id: string;
    title: string;
    date: string;
    category: string;
    description: string;
    city: string;
    venue: string;
    hostedBy: string;
    hostPhotoURL: string;
    attendees: {
      id: string;
      name: string;
      photoURL: string;
    }[];
  }[];
}

export default class EventList extends Component<EventProps, {}> {
  render() {
    const { events } = this.props;
    return (
      <div>
        <h1>Event List</h1>
        {events.map((event: any) => (
          <EventListItem key={event.id} events={event} />
        ))}
      </div>
    );
  }
}
