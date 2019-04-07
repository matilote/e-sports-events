import React, { Component } from "react";
import EventListItem from "./EventListItem";

export interface IEventProps {
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
    }[]
  }[],
  onEventOpen: any
  deleteEvent: any
}

const EventList = (props: IEventProps) => {
  const { events, onEventOpen, deleteEvent } = props;
  return (
    <div>
      <h1>Event List</h1>
      {events.map((event: any) => (
        <EventListItem key={event.id} events={event} onEventOpen={onEventOpen} deleteEvent={deleteEvent}/>
      ))}
    </div>
  );
};

export default EventList;
