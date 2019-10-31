import React from 'react';
import styled from 'styled-components';

const StyledItem = styled.div`
  -khtml-user-select: none;
  -moz-user-select: -moz-none;
  -ms-user-select: none;
  -webkit-user-select: none;

  background: #99cc99;
  border-radius: 0.5rem;
  color: black;
  display: flex;
  font-size: 1rem;
  height: 97px;
  justify-items: center;
  margin: 0.1rem;
  padding: 1rem;
  padding-top: 0.1rem;
  width: 260px;
  .namepart {
    display: flex;
    justify-content: space-between;
    width: 150px;
    .who {
      display: flex;
      font-size: 2.5rem;
      justify-content: center;
      margin-bottom: 0.5rem;
      margin-left: 5px;
      font-weight: bold;
    }
  }
  .description {
    justify-content: left;
    width: 100px;
    .text {
      white-space: nowrap;
      display: flex;
      font-size: 18px;
      overflow: hidden;
      margin-bottom: 8px;
    }
    .company {
      white-space: nowrap;
      display: flex;
      font-size: 25px;
      overflow: hidden;
      margin-bottom: 8px;
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
          <div className="company">{serial}</div>
          <div className="company">{company}</div>
          <div className="text">{requester}</div>
        </div>
      </StyledItem>
    </div>
  );
};

export default React.memo(BuildListItem);
