import express, { Express } from 'express';

const app: Express = express();
const port = 4000;

app.get('/xxx', (request, response) => {
  response.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
