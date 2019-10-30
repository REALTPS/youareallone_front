import React from 'react';
import styled from 'styled-components';

const StyledItem = styled.div`
  -khtml-user-select: none;
  -moz-user-select: -moz-none;
  -ms-user-select: none;
  -webkit-user-select: none;
  background: #e3e3f3;
  border-radius: 0.5rem;
  color: black;
  display: flex;
  font-size: 1rem;
  justify-items: center;
  margin: 0.5rem;
  padding: 1rem;
  width: 260px;
  .namepart {
    display: flex;
    justify-content: space-between;
    width: 150px;
    .who {
      display: flex;
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
      margin-left: 5px;
    }
  }
  .description {
    justify-content: space-between;
    .text {
      display: flex;
      font-size: 20px;
      margin-left: 27px;
    }
  }

  & + & {
    border-top: 1px solid black;
  }
`;
const BuildListItem = ({ history, onToggle, style }) => {
  const { name, company, serial, requester } = history;
  return (
    <div className="ListItem-virtualized" style={style}>
      <StyledItem>
        <div className="namepart">
          <div className="who">{name}</div>
        </div>
        <div className="description">
          <div className="text">{company}</div>
          <div className="text">{serial}</div>
          <div className="text">{requester}</div>
        </div>
      </StyledItem>
    </div>
  );
};

export default React.memo(BuildListItem);
