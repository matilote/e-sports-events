import React, { Component } from "react";
import { List, Image } from "semantic-ui-react";
import IAttendee from "../../interfaces/IAttendee";

const EventListAttendees = (props: IAttendee) => {
  const { attendee } = props;
  return (
    <List.Item>
      <Image as="a" size="mini" circular src={attendee.photoURL} />
    </List.Item>
  );
};

export default EventListAttendees;
