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
  height: 750px;
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

const YOUAREALONE = styled.div`
  -khtml-user-select: none;
  -moz-user-select: -moz-none;
  -ms-user-select: none;
  -webkit-user-select: none;
  border-bottom: 4px solid #dddddd;
  font-size: 4.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  padding-bottom: 3rem;
`;

class ShowNamePage extends React.Component {
  state = { history: [], keyword: '' };
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
  onChange = e => {
    this.setState({ keyword: e.target.value });
  };
  render() {
    return (
      <>
        <YOUAREALONE>You are alone.</YOUAREALONE>
        <PageDiv>
          <Div2>
            <BuildListTemplate
              keyword={this.state.keyword}
              onChange={this.onChange}
            >
              <BuildListPart
                lists={this.state.history.filter(e => {
                  return (
                    e.name
                      .toLowerCase()
                      .indexOf(this.state.keyword.toLowerCase()) > -1 ||
                    e.company
                      .toLowerCase()
                      .indexOf(this.state.keyword.toLowerCase()) > -1
                  );
                })}
              />
            </BuildListTemplate>
          </Div2>

          <Div>
            <ShowNameTemplate />
          </Div>
        </PageDiv>
      </>
    );
  }
}

export default ShowNamePage;
