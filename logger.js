'use strict';

/**
 * logger module
 * @module logger
 */

const net = require('net');

const client = new net.Socket();

client.connect(3001, 'localhost', () => console.log('Socket in logger.js created!'));

/**
 * client.on('data)
 * @param {string} buffer - buffer sent from server.js
 * @desc checks whether error or save 
 */

client.on('data', data => {
  let payload = JSON.parse(data.toString().trim());
  if(payload.name === 'saved'){
    console.log(payload);
  } else {
    console.error(payload);
  }


});

client.on('close', () => {
  console.log('Connection to logger socket closed!');
});