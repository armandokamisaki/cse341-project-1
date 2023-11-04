const express = require("express");
const app = express();

app.use('/', require('./routes'))

const port = process.env.PORT || 3000;

app.listen(port, () => (console.log(`Running on port ${port}`)));