'use strict';

/**
 * server module
 * @module server
 */


const net = require('net');

const port = process.env.PORT || 3001;
const server = net.createServer();

server.listen(port, () => console.log(`Server up on ${port}`) );
server.on('error', handleError);

let socketPool = {};

server.on('connection', (socket) => {
  const id = `Socket-${Math.random()}`;
  socketPool[id] = socket;
  socket.on('data', (buffer) => dispatchEvent(buffer));
  socket.on('close', () => {
    delete socketPool[id];
  });
});

/**
* @function dispatchEvent 
* @param {String} buffer - buffer being received to write
* @desc sends event to logger
 */

let dispatchEvent = (buffer) => {
  let text = buffer.toString().trim();
  let payload = JSON.parse(text);
  for (let socket in socketPool) {
    socketPool[socket].write(JSON.stringify(payload));
    // socketPool[socket].write(`${event} ${text}`);
  }
};

/**
 * This function logs server connection errors.
 * @function
 * @name handleError
 * @param err {object} An error
 **/
function handleError(err) {
  console.error(`server error: ${err.message}`);
}

module.exports = dispatchEvent;
