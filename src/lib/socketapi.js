import io from 'socket.io-client';
import axios from 'axios';

const ioserver = 'http://192.168.0.76:4600';
const socket = io(ioserver);

const instance = axios.create({
  baseURL: 'http://192.168.0.76:4500/api',
  timeout: 1000,
});

socket.on('status', data => {
  this.setState({ status: data.status });

  this.phaseshift(data);
});
