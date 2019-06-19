'use strict';
const net = require('net');

const client = new net.Socket();

const fs = require('fs');

client.connect(3001, 'localhost', () => console.log('Socket in app.js created!'));

const alterFile = (file) => {
  fs.readFile( file, (err, data) => {
    if(err) { throw err; }
    let text = data.toString().toUpperCase();
    fs.writeFile( file, Buffer.from(text), (err, data) => {
      if(err) { throw err; }
      console.log(`${file} saved`);
    });
  });
};

let file = process.argv.slice(2).shift();
alterFile(file);
