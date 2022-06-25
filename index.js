const express = require('express');
const cors = require('cors');
const { db } = require('./db-config');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/medication', async (req, res) => {
  const [rows] = await db.query(
    'SELECT name, expiration FROM medication ORDER BY name ASC'
  );
  res.status(200).json(rows);
});

app.post('/medication', async (req, res) => {
  const { name, expiration } = req.body;
  await db.query('INSERT INTO medication (name, expiration) VALUES (?, ?)', [
    name,
    expiration,
  ]);
  res.status(201).send('Received new medication name');
});

app.use('/', (req, res) => {
  res.status(404).send('medication not found !');
});

app.listen(5051, () => {
  console.log(`🚀 Server running on http://localhost:5051`);
});
