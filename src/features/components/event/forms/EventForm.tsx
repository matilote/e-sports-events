import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import { render } from "react-dom";

interface IEventFormProps {
  handleFormOpen(): void;
  createEvent(newEvent: any): void;
  selectedEvent: any;
}

interface IEventFormState {
  event: {
    title: string;
    date: string;
    city: string;
    venue: string;
    hostedBy: string;
  };
}

const emptyEvent = {
  title: '',
  date: '',
  city: '',
  venue: '',
  hostedBy: ''
};
class EventForm extends Component<IEventFormProps, IEventFormState> {
  constructor(props: IEventFormProps) {
    super(props);
    this.state = {
      event: emptyEvent
    };
  }

  componentDidMount() {
    if (this.props.selectedEvent !== null) {
      this.setState({
        event: this.props.selectedEvent
      });
    }
  }

  componentWillReceiveProps(nextProps: any) {
    if (nextProps.selectedEvent !== this.props.selectedEvent) {
      this.setState({
        event: nextProps.selectedEvent || emptyEvent
      })
    }
  }

  render(): JSX.Element {
    const { handleFormOpen } = this.props;
    const { event } = this.state;
    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input
              name="title"
              onChange={this.onInputChange}
              value={event.title}
              placeholder="First Name"
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              name="date"
              onChange={this.onInputChange}
              value={event.date}
              type="date"
              placeholder="Event Date"
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              name="city"
              onChange={this.onInputChange}
              value={event.city}
              placeholder="City event is taking place"
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              name="venue"
              onChange={this.onInputChange}
              value={event.venue}
              placeholder="Enter the Venue of the event"
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              name="hostedBy"
              onChange={this.onInputChange}
              value={event.hostedBy}
              placeholder="Enter the name of person hosting"
            />
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
    e.preventDefault();
    this.props.createEvent(this.state.event);
  };

  private onInputChange = (e: any): void => {
    const newEvent = this.state.event;
    newEvent[e.target.name] = e.target.value;
    this.setState({
      event: newEvent
    });
  };
}
export default EventForm;
