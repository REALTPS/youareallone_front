import React from 'react';
import ShowNameTemplate from '../component/ShowNameTemplate';
import styled from 'styled-components';
import BuildListTemplate from '../component/BuildListTemplate';
import BuildListPart from '../component/BuildListPart';
import axios from 'axios';

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

const instance = axios.create({
  baseURL: 'http://192.168.0.71:4500/api',
  timeout: 1000,
});

class ShowNamePage extends React.Component {
  state = { history: [] };
  componentDidMount() {
    instance({
      method: 'get',
      url: '/gets/history',
    }).then(response => {
      console.log(response.data.history);
      if (response.data.confirm === 'OK') {
        this.setState({ history: response.data.history });
      }
    });
  }

  render() {
    return (
      <PageDiv>
        <BuildListTemplate>
          <BuildListPart lists={this.state.history} />
        </BuildListTemplate>
        <Div>
          <ShowNameTemplate />
        </Div>
      </PageDiv>
    );
  }
}

export default ShowNamePage;
