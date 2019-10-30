import React, { useCallback } from 'react';
import styled from 'styled-components';
// import "./ListPart.scss";
import { List } from 'react-virtualized';
import ListItem from './BuildListItem';

const BuildListPart = ({ lists, onToggle }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const history = lists[index];
      return (
        <ListItem
          history={history}
          key={key}
          style={style}
          onToggle={onToggle}
        />
      );
    },
    [lists, onToggle],
  );

  const Lists = styled.div`
    background: #f1f3f5;
    margin: 0.5rem;
  `;

  return (
    <Lists>
      <List
        className="List"
        width={450}
        height={700}
        rowCount={lists.length}
        rowHeight={100}
        rowRenderer={rowRenderer}
        list={lists}
        style={{
          justifyItems: 'center',
          outline: 'none',
          width: '420px',
          background: '#f1f3f5',
        }}
      />
    </Lists>
  );
};

export default BuildListPart;
