const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const cors = require('cors');

// middleware
app.use(express.json());
app.use(cors());

// routes
const userRouter = require('./routing/users');

// database
mongoose
  .connect(
    'mongodb+srv://shalom:shalom21@joole-xwwcc.mongodb.net/test?retryWrites=true',
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('Connected to the database!');
  })
  .catch(err => {
    console.log('Connection failed!', err);
  });

  mongoose.set('useCreateIndex', true)

app.use('/', userRouter);

app.listen(port, () => { console.log('The backend is running in port ' + port)});