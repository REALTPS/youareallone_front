import React, { Component, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
  border-radius: 4px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 1.125);

  padding: 2rem;
  width: 480px;
`;

const IO = ['HUGH', 'CARL', 'SAM', 'MARK'];

let i = 0;

class ShowNameForm extends Component {
  state = { cnt: 0, isrun: true };
  componentDidMount() {
    this.loop = setInterval(this.timer, 10);
  }
  onClick = () => {
    if (this.state.isrun == true) {
      clearInterval(this.loop);
      this.setState({ isrun: !this.state.isrun });
    } else {
      this.loop = setInterval(this.timer, 10);
      this.setState({ isrun: !this.state.isrun });
    }
    this.changer();
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
        {this.state.isrun ? (
          <div className="name-area" onClick={this.onClick}>
            {IO[this.state.cnt]}
          </div>
        ) : (
          <Submitter />
        )}
      </WhiteBox>
    );
  }
}

export default ShowNameForm;
