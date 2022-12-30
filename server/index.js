const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//routes
const rentalRoutes = require('./routes/rentals');
const usersRoutes = require('./routes/users');


//models

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect('mongodb+srv://samaneghbali1:Sa12344321@cluster0.kx9khxy.mongodb.net/rbs-react?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}, () => {
  console.log('Connected to DB!')
});


//middlewares
app.use(bodyParser.json())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});
app.use('/api/v1/rentals', rentalRoutes);
app.use('/api/v1/users', usersRoutes);


app.listen(PORT, () => {
    console.log('Server is listening on port: ', PORT);
})