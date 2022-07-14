import http from "http";
import fs from "fs/promises";
import path from "path";
import {addNote} from "./notes.controller";
import chalk from "chalk";

const server = http.createServer(async (req, res) => {
  if (req.method === 'GET') {
    const content = await fs.readFile(path.join(basePath, 'index.html'));
    // res.setHeader('Content-Type', 'text/html');
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.end(content);
  } else if (req.method === 'POST') {
    const body = [];
    res.writeHead(200, {
      'Content-Type': 'text/plain; charset=utf-8'
    });

    req.on('data', (data) => {
      console.log('data', data);
      body.push(Buffer.from(data));
    });

    req.on('end', () => {
      const title = body.toString().split('=')[1].replaceAll('+', ' ');
      addNote(title);
      res.end(`Title = ${title}`);
    });

  }
});

server.listen(3000, () => {
  console.log(chalk.green(`Server has been started on port:${port} ...`));
});
