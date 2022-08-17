const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ clientTracking: false, noServer: true });

wss.on('connection', (ws, request, response) => {
  const { id } = request.session.user;

  response.app.map.set(id, { ws, user: request.session.user });

  ws.on('message', (message) => {
    console.log(JSON.parse(message));
  });

  ws.on('close', () => {

  });
});

module.exports = wss;
