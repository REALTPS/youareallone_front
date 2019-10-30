import React from 'react';
import ShowNameTemplate from '../component/ShowNameTemplate';
import styled from 'styled-components';
import BuildListTemplate from '../component/BuildListTemplate';
import BuildListPart from '../component/BuildListPart';
import axios from 'axios';
import io from 'socket.io-client';

const ioserver = 'http://192.168.0.71:4600';
const socket = io(ioserver);

const PageDiv = styled.div`
  align-content: center;
  background: #f1f3f5;
  display: flex;
  width: 100%;
`;

const Div = styled.div`
  background: #f1f3f5;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Div2 = styled.div`
  background: #f1f3f5;
  display: flex;
  justify-content: center;
  width: 400px;
`;

const instance = axios.create({
  baseURL: 'http://192.168.0.71:4500/api',
  timeout: 1000,
});

class ShowNamePage extends React.Component {
  state = { history: [] };
  componentDidMount() {
    this.gethistory();
    socket.on('history', data => {
      if (data.confirm === 'OK') {
        this.gethistory();
      }
    });
  }
  gethistory() {
    instance({
      method: 'get',
      url: '/gets/history',
    }).then(response => {
      if (response.data.confirm === 'OK') {
        this.setState({ history: response.data.history });
      }
    });
  }
  render() {
    return (
      <PageDiv>
        <Div2>
          <BuildListTemplate>
            <BuildListPart lists={this.state.history} />
          </BuildListTemplate>
        </Div2>

        <Div>
          <ShowNameTemplate />
        </Div>
      </PageDiv>
    );
  }
}

export default ShowNamePage;
