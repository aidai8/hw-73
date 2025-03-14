const express = require('express');

const app = express();
const port = 8000;

app.get('/', (req, res) => {
   return res.send('Homepage!');
});

app.get('/hello', (req, res) => {
   return res.send('Hello!');
});

app.get('*', (req, res) => {
   return res.status(404).send('<h1>Not found</h1>');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});