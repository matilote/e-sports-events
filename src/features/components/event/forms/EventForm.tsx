import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import { render } from "react-dom";

interface IEventFormProps {
  handleFormOpen(): void;
}

class EventForm extends Component<IEventFormProps, {}> {
  state = {
    event: {
      title: '',
      date: '',
      city: '',
      venue: '',
      hostedBy: ''
    }
  }
  render() {
    const { handleFormOpen } = this.props;
    const { event } = this.state
    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input name='title' onChange={this.onInputChange} value={event.title} placeholder="First Name" />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input type="date" placeholder="Event Date" />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input placeholder="City event is taking place" />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input placeholder="Enter the Venue of the event" />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input placeholder="Enter the name of person hosting" />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={handleFormOpen} type="button">
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }

  private onFormSubmit = (e: any): void => {
    e.preventDefault()
    console.log(this.state.event)
  };

  private onInputChange = (e: any): void => {
    const newEvent = this.state.event;
    newEvent[e.target.name] = e.target.value
    this.setState({
      event: newEvent
    })
  }
}
export default EventForm;
