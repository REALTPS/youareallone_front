import React from 'react';
import styled from 'styled-components';
import ShowNameForm from './ShowNameForm';

const NameTemplateBlock = styled.div`
  align-items: center;
  background: #f1f3f5;

  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const YOUAREALONE = styled.div`
  -khtml-user-select: none;
  -moz-user-select: -moz-none;
  -ms-user-select: none;
  -webkit-user-select: none;
  font-size: 5rem;
  font-weight: bold;
  margin: 1.5rem;
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
