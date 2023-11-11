const express = require("express");
const bodyParser = require('body-parser');
const mongodb = require('./data/database');
const app = express();

const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('access-Control-Allow-Origin', '*');
  res.setHeader('access-Control-Allow-Origin', 
  'Origin, X-Requested-With, Content-type, Accept, Z-key'
  );
  res.setHeader('Access-Control-Aloow-Methods', 'GET,POST, PUT, DELETE, OPTIONS');
  next();
});


app.use('/', require('./routes'))




mongodb.initDb((err) => {
    if (err) {
      console.log(err);
    } else {
      app.listen(port, () => (console.log(`Database is listening and node is running on port ${port}`)));
    }
  });
  

