import express from 'express';
import './cronjobs/constantTweeting';

const app = express();

app.get('/', (req, res) => {
  return res.send(new Date());
});

app.listen(3000, () => {
  console.log('Server working');
});
