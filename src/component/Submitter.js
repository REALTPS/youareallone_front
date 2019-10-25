import React, { useState } from 'react';
import styled from 'styled-components';
import { MdGavel } from 'react-icons/md';

const Input = styled.input`
  font-size: 20px;
  margin-bottom: 5px;
  margin-left: 1px;
  margin-right: 1px;
  margin-top: 5px;
  padding: 1px;
  width: 300px;
`;

const Btn = styled(MdGavel)`
  background-color: white;
  height: 69px;
  justify-content: center;
  margin: 4px;
  margin-right: 10px;
  padding: 0px;
  width: 69px;
`;

const Box = styled.div`
  display: inline-flex;
  height: 92px;
  width: 420px;
  .inner {
    justify-content: center;
    margin-bottom: 5px;
    margin-left: 10px;
    margin-right: 1px;
    margin-top: 5px;
  }
`;

const Submitter = props => {
  const [customer, setCustomer] = useState('');
  const [secretno, setSecretno] = useState('');
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
          value={secretno}
        />
      </div>
      <div className="inner">
        <Btn
          onClick={() => {
            const whois = props.whois;
            if (customer === '' || secretno === '') return;
            const commitjson = {
              whois: { whois },
              customer: { customer },
              secretno: { secretno },
            };
            console.log(commitjson);
            setCustomer('');
            setSecretno('');
          }}
        />
      </div>
    </Box>
  );
};

export default Submitter;
