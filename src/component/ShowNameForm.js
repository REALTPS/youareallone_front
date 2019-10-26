import React, { Component } from 'react';
import styled from 'styled-components';
import Submitter from './Submitter';
import axios from 'axios';

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

const instance = axios.create({
  baseURL: 'http://192.168.0.71:4500/api',
  timeout: 1000,
});

const StyledLink = styled.div`
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
  state = { status: 0, cnt: 0, isrun: false, who: 'Start' };
  th = this;
  componentDidMount() {
    this.setState({ who: 'Load' });
    this.loop = setInterval(this.timer, 40);
  }
  onClick = () => {
    switch (this.state.status) {
      case 0:
        instance({
          method: 'post',
          url: '/posts/start',
        })
          .then(response => {
            if (response.data.confirm === 'start') {
              this.setState({
                isrun: !this.state.isrun,
              });
            }
          })
          .catch(err => {
            this.setState({ status: 0 });
            return;
          });
        break;
      case 1:
        instance({
          method: 'post',
          url: '/posts/end',
        })
          .then(response => {
            if (response.data.confirm === 'end') {
              this.setState({
                isrun: !this.state.isrun,
                cnt: response.data.cnt % 4,
                status: response.data.status,
              });
            } else {
              this.setState({ status: 0, who: 'Start' });
            }
          })
          .catch(err => {
            this.setState({ status: 0 });
            return;
          });
        break;
      default:
        break;
    }
  };

  setstatus = status => {
    this.setState({ status: status });
    this.phaseshift();
  };

  phaseshift = () => {
    switch (this.state.status) {
      case 0:
        this.setState({ who: 'Start' });
        break;
      case 1:
        this.setState({ who: IO[this.state.cnt], isrun: true });
        break;
      case 2:
        this.setState({ who: IO[this.state.cnt], isrun: false });
        break;

      default:
    }
  };
  timer = () => {
    instance({
      method: 'get',
      url: '/posts/status',
    })
      .then(response => {
        if (response.data.confirm === 'data') {
          this.setState({
            cnt: response.data.cnt % 4,
            status: response.data.status,
          });
          this.phaseshift();
        }
      })
      .catch(err => {});
  };

  render() {
    return (
      <WhiteBox>
        <StyledLink className="name-area" onClick={this.onClick}>
          {this.state.who}
        </StyledLink>
        {this.state.status === 2 && (
          <Submitter
            {...this.state}
            setstatus={this.setstatus}
            whois={IO[this.state.cnt]}
          />
        )}
      </WhiteBox>
    );
  }
}

export default ShowNameForm;
