import React, { Component } from 'react'
import { List, Image } from 'semantic-ui-react';
import { IAttendee } from '../../interfaces/IAttendee';


export default class EventListAttendees extends Component<IAttendee, {}> {
  render() {
    const {attendee} = this.props;
    return (
      <List.Item>
        <Image as='a' size='mini' circular src={attendee.photoURL}/>
      </List.Item>
    )
  }
}
