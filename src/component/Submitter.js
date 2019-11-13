import React, { useState } from 'react';
import styled from 'styled-components';
import { MdGavel } from 'react-icons/md';
import axios from 'axios';

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
  height: 110px;
  justify-content: center;
  margin: 4px;
  margin-right: 10px;
  padding: 0px;
  width: 110px;
`;

const Box = styled.div`
  display: inline-flex;
  height: 132px;
  width: 420px;
  .inner {
    justify-content: center;
    margin-bottom: 5px;
    margin-left: 5px;
    margin-right: 10px;
    margin-top: 5px;
  }
`;

const Submitter = props => {
  const [company, setCompany] = useState('');
  const [serial, setSerial] = useState('');
  const [requester, setRequester] = useState('');
  return (
    <Box>
      <div className="inner">
        <Input
          onChange={e => {
            setCompany(e.target.value);
          }}
          placeholder="Company"
          value={company}
        />
        <Input
          onChange={e => {
            setSerial(e.target.value);
          }}
          placeholder="Serial"
          value={serial}
        />
        <Input
          onChange={e => {
            setRequester(e.target.value);
          }}
          placeholder="Requester"
          value={requester}
        />
      </div>
      <div className="inner">
        <Btn
          onClick={() => {
            const name = props.whois;
            if (company === '' || serial === '' || requester === '') return;

            axios.post('http://192.168.0.76:4500/api/posts/setdata', {
              name: name,
              customer: company,
              serial: serial,
              requester: requester,
            });

            setCompany('');
            setSerial('');
            setRequester('');
          }}
        />
      </div>
    </Box>
  );
};

export default Submitter;
