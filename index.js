const express = require ('express');
// const Datastore = require('nedb');

const app = express();
app.listen(3000, () => console.log('Listening to Port 3000'));
app.use(express.static('public'));
app.use(express.json({limit: '100kb'}));

app.post('/form-data', (req, res) => {
  console.log(req.body);

  res.json({
    status: 'success'
  });
});