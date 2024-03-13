
const express = require('express');
const app = express();
const config = require('./config/config');
const routes = require('./routes/index');

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.use('/', routes);


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}`);
});
