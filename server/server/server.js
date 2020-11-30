const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
var cors = require('cors')

const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT || 5000;

app.locals.appName = 'Our Application';

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

console.log("environment: ", process.env.NODE_ENV);

// FORMAT OF TOKEN
// Authorization: Bearer <access_token>

// set up the set the routes defined in /server/routers to be endpoint
require('./routes')(app);

// default file to send if none of our other router handlers catch the request
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/client/index.html');
})

app.listen(port, () => console.log(`Listening on port ${port}`));
