import React, { Component } from "react";
import { Segment, Item, List, Icon, Button } from "semantic-ui-react";
import EventListAttendees from "./EventListAttendees";

interface IEvent {
  key: string;
  events: any;
  onEventOpen: any;
  deleteEvent: any;
}

const EventListItem = (props: IEvent): JSX.Element => {
  const { events, onEventOpen, deleteEvent } = props;
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src={events.hostPhotoURL} />
            <Item.Content>
              <Item.Header as="a">{events.title}</Item.Header>
              <Item.Description>
                Hosted by <a>{events.hostedBy}</a>
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" /> {events.date} |
          <Icon name="marker" /> {events.venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {events.attendees &&
            events.attendees.map((attendee: any) => (
              <EventListAttendees key={attendee.id} attendee={attendee} />
            ))}
        </List>
      </Segment>
      <Segment clearing>
        <span>{events.description}</span>
        <Button
          onClick={onEventOpen(events)}
          as="a"
          color="teal"
          floated="right"
          content="View"
        />
         <Button
          onClick={deleteEvent(events.id)}
          as="a"
          color="red"
          floated="right"
          content="Delete"
        />
      </Segment>
    </Segment.Group>
  );
};

export default EventListItem;
