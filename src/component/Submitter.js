import React, { useState } from 'react';

import styled from 'styled-components';

const Box = styled.div`
  .name-area {
    -khtml-user-select: none;
    -moz-user-select: -moz-none;
    -ms-user-select: none;
    -webkit-user-select: none;
    display: block;
    flex-direction: column;
    font-size: 10rem;
    font-weight: bold;
    justify-content: center;
    letter-spacing: 2px;
    padding-bottom: 1.5rem;

    user-select: none;
  }
  align-items: center;
  background: white;
  border-radius: 4px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 1.125);
  padding: 2rem;
  width: 480px;
`;

const InBox = styled.div`
  display: inline-flex;
  margin-left: 8rem;
`;

const Submitter = () => {
  const [customer, setCustomer] = useState('');
  const [sercretno, setSecretno] = useState('');

  return (
    <>
      <input
        onChange={e => {
          setCustomer(e.target.value);
        }}
        placeholder="Customer"
        value={customer}
      />

      <input
        onChange={e => {
          setSecretno(e.target.value);
        }}
        placeholder="SecretNo"
        value={sercretno}
      />
    </>
  );
};

export default Submitter;
