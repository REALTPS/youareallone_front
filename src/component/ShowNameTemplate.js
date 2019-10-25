import React from 'react';
import styled from 'styled-components';
import ShowNameForm from './ShowNameForm';

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

const YOUAREALONE = styled.div`
  font-size: 5rem;
  font-weight: bold;
  margin: 3rem;
`;

const ShowNameTemplate = () => {
  return (
    <NameTemplateBlock>
      <YOUAREALONE>You are ALONE</YOUAREALONE>
      <ShowNameForm />
    </NameTemplateBlock>
  );
};

export default ShowNameTemplate;
