const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 8080;
const errorHandler = require('./handler/errors.js')
require('dotenv').config()
const passport = require('passport');
const users = require('./helpers/users');
require('./config/passport')(passport);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(passport.initialize());

//
// app.use((req, res, next) => {
//   let err = new Error ('Not Found');
//   err.status = 404;
//
//   next(err);
// })
//
// app.use(errorHandler);

app.use('/users', users);

app.listen(PORT, ()=>{
  console.log(`App listening on port ${PORT}`);
})
