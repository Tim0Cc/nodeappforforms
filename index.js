const express = require ('express');
const Datastore = require('nedb');

const app = express();
app.listen(3000, () => console.log('Listening to Port 3000'));
app.use(express.static('public'));
app.use(express.json({limit: '100kb'}));

const db = new Datastore('database.db');
db.loadDatabase();

app.post('/form-data', (req, res) => {
  console.log(req.body);
  const data = req.body;
  const timestamp = Date.now();
  data.timestamp = timestamp;

  db.insert(data);

  res.json({
    status: 'success'
  });
});

app.get('/showpage', (req, res) => {
  db.find({}, (err, data) => {
    if (err) {
      res.end();
      return;
    }
    res.json(data);
  })
});