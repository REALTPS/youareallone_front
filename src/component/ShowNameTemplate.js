import React from 'react';
import styled from 'styled-components';
import ShowNameForm from './ShowNameForm';
import Submitter from './Submitter';
import BrowserRouter from 'react-router-dom';

const NameTemplateBlock = styled.div`
  align-items: center;
  background: #f1f3f5;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

const ShowNameTemplate = () => {
  return (
    <NameTemplateBlock>
      <ShowNameForm />
    </NameTemplateBlock>
  );
};

export default ShowNameTemplate;
