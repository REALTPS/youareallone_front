import React, { Component } from 'react';
import styled from 'styled-components';
import Submitter from './Submitter';
import axios from 'axios';
import io from 'socket.io-client';

const ioserver = 'http://192.168.0.71:4600';
const socket = io(ioserver);

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
  IO = ['Mark', 'Sam', 'Hugh', 'Carl'];
  state = { status: 0, cnt: 0, isrun: false, who: 'Start' };
  th = this;

  componentDidMount() {
    this.i = 0;
    this.setState({ who: '' });
    // this.loop = setInterval(this.timer, 100);
    this.timer();
    socket.on('status', data => {
      this.setState({ status: data.status });

      this.phaseshift(data);
    });
    instance({
      method: 'get',
      url: '/posts/status',
    })
      .then(response => {
        if (response.data.confirm === 'data') {
          this.setState({
            status: response.data.status,
            who: response.data.name,
          });

          this.phaseshift(response.data);
        }
      })
      .catch(err => {
        this.setState({ status: 0 });
        return;
      });
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
            } else {
              this.setState({ status: 0, who: 'Start' });
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

  phaseshift = data => {
    switch (this.state.status) {
      case 0:
        this.setState({ who: 'Start' });
        break;
      case 1:
        this.getcandidate();
        this.setState({ isrun: true });
        this.loop = setInterval(this.timer, 10);
        break;
      case 2:
        clearInterval(this.loop);
        this.setState({
          isrun: false,
          id: data.id,
          status: data.status,
          who: data.name,
        });

        break;

      default:
    }
  };

  comparison = c => {
    if (this.IO.length !== c.length) return false;

    for (let i = 0; i < this.IO.length; i++) {
      if (c[i] !== this.IO[i]) return false;
    }

    return true;
  };

  getcandidate = () => {
    let c;
    instance({
      method: 'get',
      url: '/posts/candidate',
    })
      .then(response => {
        if (response.data.confirm === 'getcandidate') {
          c = response.data.candidate;

          if (!this.comparison(c)) {
            this.IO = c;
          }
        }
      })
      .catch(err => {
        this.IO = [];

        return;
      });
  };

  timer = () => {
    this.setState({ who: this.IO[this.i] });
    this.i += 1;
    this.i %= this.IO.length;
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
            whois={this.state.who}
          />
        )}
      </WhiteBox>
    );
  }
}

export default ShowNameForm;
