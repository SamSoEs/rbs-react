const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const rentalRoutes = require('./routes/rentals');

const Rental = require('./models/rental'); 
const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect('mongodb+srv://samaneghbali1:Sa12344321@cluster0.kx9khxy.mongodb.net/rbs-react?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {
  console.log('Connected to DB!')
});

app.use(bodyParser.json())
app.use('/api/v1/rentals', rentalRoutes);

app.listen(PORT, () => {
    console.log('Server is listening on port: ', PORT);
})