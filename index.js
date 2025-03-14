const express = require('express');
const {Vigenere} = require('caesar-salad');

const app = express();
const port = 8000;
const password = '888';

app.get('/', (req, res) => {
   return res.send('Homepage!');
});

app.get('/hello', (req, res) => {
   return res.send('Hello!');
});

app.get('/encode/:text', (req, res) => {
   const {text} = req.params;
   const encrypted = Vigenere.Cipher(password).crypt(text);
   return res.send(encrypted);
});

app.get('/decode/:text', (req, res) => {
   const {text} = req.params;
   const decrypted = Vigenere.Decipher(password).crypt(text);
   return res.send(decrypted);
});

app.get('*', (req, res) => {
   return res.status(404).send('<h1>Not found</h1>');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});