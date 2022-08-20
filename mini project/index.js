const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// setup the server port
const port = process.env.PORT || 5000;

// parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse request data content type application/json
app.use(bodyParser.json());

// define root route
app.get('/', (req, res)=>{
    res.send('Hello World');
});
// import treasure routes
const treasureRoutes = require('./src/routes/treasure.route');
const userRoutes = require('./src/routes/user.route');
const moneyvalRoutes = require('./src/routes/moneyval.route');
const prizeRoutes = require('./src/routes/prize.route');
// create treasure routes
app.use('/api/v1/treasure', treasureRoutes);
// create user routes
app.use('/api/v1/user', userRoutes);
// create moneyval routes
app.use('/api/v1/moneyval', moneyvalRoutes);
// create prize routes
app.use('/api/v1/prize', prizeRoutes);

// listen to the port
app.listen(port, ()=>{
    console.log(`Express is running at port ${port}`);
});