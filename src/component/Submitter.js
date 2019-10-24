import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Input = styled.input`
  font-size: 20px;
  margin-bottom: 5px;
  margin-left: 1px;
  margin-right: 1px;
  margin-top: 5px;
`;

const Btn = styled.button`
  height: 4rem;
  justify-content: center;
  margin: 5px
  width: 4rem;
`;

const Box = styled.div`
  display: inline-flex;
  height: 92px;
  width: 390px;
  .inner {
    justify-content: center;
    margin-bottom: 5px;
    margin-left: 1px;
    margin-right: 1px;
    margin-top: 5px;
  }
`;

const onClick = (whois, customer, sercretno) => {
  const commitjson = {
    whois: { whois },
    customer: { customer },
    secretno: { sercretno },
  };
};

const Submitter = arg => {
  const [customer, setCustomer] = useState('');
  const [sercretno, setSecretno] = useState('');
  return (
    <Box>
      <div className="inner">
        <Input
          onChange={e => {
            setCustomer(e.target.value);
          }}
          placeholder="Customer"
          value={customer}
        />
        <Input
          onChange={e => {
            setSecretno(e.target.value);
          }}
          placeholder="SecretNo"
          value={sercretno}
        />
      </div>
      <div className="inner">
        <Btn onClick={onClick} />
      </div>
    </Box>
  );
};

export default Submitter;
