const http = require('http');
const chalk = require('chalk');

const port = 3000
const server = http.createServer((req, res) => {
  console.log('Server!');

  res.end('Hello from server!')
})

server.listen(3000,() => {
  console.log(chalk.green(`Server has been started on port:${port} ...`));
})
