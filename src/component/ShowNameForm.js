import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';
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
const PATHS = ['/submit', '/'];

const instance = axios.create({
  baseURL: 'http://192.168.0.71:4500/api',
  timeout: 1000,
});

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
  state = { status: 0, cnt: 0, isrun: false, who: 'Start' };
  th = this;
  componentDidMount() {}
  onClick = () => {
    this.setState({ status: (this.state.status + 1) % 3 });
    switch (this.state.status) {
      case 0:
        instance({
          method: 'post',
          url: '/posts/start',
        })
          .then(response => {
            if (response.data === 'start') {
              this.loop = setInterval(this.timer, 20);
              this.setState({ isrun: !this.state.isrun });
            }
          })
          .catch(err => {
            this.setState({ status: 0 });
            return;
          });

        break;
      case 1:
        clearInterval(this.loop);
        instance({
          method: 'post',
          url: '/posts/end',
        })
          .then(response => {
            if (response.data.confirm === 'end') {
              this.setState({
                isrun: !this.state.isrun,
                cnt: response.data.cnt % 4,
              });
            } else {
              console.log(response);
              this.setState({ status: 0, who: 'Start' });
            }
          })
          .then(response => {
            this.setState({ who: IO[this.state.cnt] });
          })
          .catch(err => {
            this.setState({ status: 0 });
            return;
          });

        break;
      case 2:
        this.setState({ who: 'Start' });
        break;
      default:
    }
  };

  timer = () => {
    const self = this;
    axios({
      method: 'get',
      url: 'http://192.168.0.71:4500/api/posts',
      responseType: 'text',
    }).then(function(response) {
      self.setState({ cnt: response.data % 4 });
    });
    this.setState({ who: IO[this.state.cnt] });
  };

  render() {
    return (
      <WhiteBox>
        <StyledLink
          to={this.state.isrun ? PATHS[0] : PATHS[1]}
          className="name-area"
          onClick={this.onClick}
        >
          {this.state.who}
        </StyledLink>
        <Route
          exact
          path="/submit"
          component={props => (
            <Submitter {...props} whois={IO[this.state.cnt]} />
          )}
        />
      </WhiteBox>
    );
  }
}

export default ShowNameForm;
