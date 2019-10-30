import React from 'react';
import styled from 'styled-components';
const Lists = styled.div`
  background: #f1f3f5;

  border-right: 1px solid;
  justify-content: left;
  margin-left: 0.5rem;
  margin-right: 0.6rem;
  margin-top: 0.5rem;
  overflow: hidden;
  .content {
    background: '#f1f3f5';
  }
`;
const BuildListTemplate = ({ children }) => {
  return (
    <Lists>
      <div className="content">{children}</div>
    </Lists>
  );
};

export default BuildListTemplate;
