import React, { Component, useState } from 'react';
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';
import Submitter from './Submitter';

const WhiteBox = styled.div`
  .name-area {
    -khtml-user-select: none;
    -moz-user-select: -moz-none;
    -ms-user-select: none;
    -webkit-user-select: none;
    display: block;
    flex-direction: column;
    font-size: 10rem;
    font-weight: bold;
    justify-content: center;
    letter-spacing: 2px;
    padding-bottom: 1.5rem;

    user-select: none;
  }
  align-items: center;
  background: white;
  border-radius: 2rem;
  box-shadow: 0 0 25px rgba(0, 0, 0, 1.125);
  height: 380px;
  padding: 2rem;
  width: 480px;
`;

const IO = ['HUGH', 'CARL', 'SAM', 'MARK'];
const PATHS = ['/', '/submit'];

let i = 0;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

class ShowNameForm extends Component {
  state = { cnt: 0, isrun: true };
  componentDidMount() {
    this.loop = setInterval(this.timer, 10);
  }
  onClick = () => {
    if (this.state.isrun == true) {
      clearInterval(this.loop);
    } else {
      this.loop = setInterval(this.timer, 10);
    }
    this.setState({ isrun: !this.state.isrun });
  };

  changer = () => {
    this.setState({ isrun: !this.state.isrun });
  };

  timer = () => {
    this.setState({ cnt: (this.state.cnt + 1) % 4 });
  };

  render() {
    return (
      <WhiteBox>
        <StyledLink
          to={this.state.isrun ? PATHS[0] : PATHS[1]}
          className="name-area"
          onClick={this.onClick}
        >
          {IO[this.state.cnt]}
        </StyledLink>
        <Route
          exact
          path="/submit"
          component={Submitter}
          whois={IO[this.state.cnt]}
        />
      </WhiteBox>
    );
  }
}

export default ShowNameForm;
