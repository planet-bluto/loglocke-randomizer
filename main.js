const express = require('express')
const app = express()
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env["PORT"] || 4000

//// Server ////
app.use('/', express.static('gbajs-gh-pages'))

app.get('/', (req, res) => {
  res.sendFile('/index.html', {root: path.join(__dirname, 'gbajs-gh-pages')});
});

server.listen(port, () => {
  console.log(`listening on *:${port}`);
})