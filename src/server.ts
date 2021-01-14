import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.send(new Date());
});

app.listen(3000, () => {
  console.log('Server working');
});
