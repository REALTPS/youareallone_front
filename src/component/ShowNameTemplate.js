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

const ShowNameTemplate = () => {
  return (
    <NameTemplateBlock>
      <ShowNameForm />
    </NameTemplateBlock>
  );
};

export default ShowNameTemplate;
