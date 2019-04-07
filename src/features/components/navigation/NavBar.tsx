import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";
import SignedOutMenu from "./Menus/SignedOutMenu";
import SignedInMenu from "./Menus/SignedInMenu";
import { RouteComponentProps } from 'react-router'

interface NavBarState {
  authenticated: boolean | undefined;
}

interface NavBarProps extends RouteComponentProps<any> {}

class NavBar extends Component<NavBarProps, NavBarState> {
  state: NavBarState = {
    authenticated: false
  };

  private handleLogin = (): void => {
    this.setState({
      authenticated: !this.state.authenticated
    })
    this.state.authenticated === false ? undefined : this.props.history.push('/')
  }

  render(): JSX.Element {
    const { authenticated } = this.state;
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={Link} to={"/"} header>
            <img src="/assets/logo.png" alt="logo" />
            E-sport Events
          </Menu.Item>
          <Menu.Item as={NavLink} to={"/events"} name="Events" />
          {authenticated && 
          <Menu.Item as={NavLink} to={"/people"} name="People" />}
          {authenticated && 
          <Menu.Item>
            <Button
              as={Link}
              to="/createEvent"
              floated="right"
              positive
              inverted
              content="Create Event"
            />
          </Menu.Item>}
          {authenticated ? <SignedInMenu login={this.handleLogin}/> : <SignedOutMenu login={this.handleLogin}/>}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(NavBar);
