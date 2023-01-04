const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/dev');
const { provideErrorHandler } = require('./middlewares');
const cors = require('cors');

//routes
const rentalRoutes = require('./routes/rentals');
const usersRoutes = require('./routes/users');
const bookingRoutes = require('./routes/bookings');

const { onlyAuthUser } = require('./controllers/users');

//models
require('./models/rental');
require('./models/user');
require('./models/booking');

const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect('mongodb+srv://samaneghbali1:Sa12344321@cluster0.kx9khxy.mongodb.net/rbs-react?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, () => {
  console.log('Connected to DB!')
});


//middlewares

app.use(cors(corsOptions));
app.use(bodyParser.json())
app.use(provideErrorHandler);


// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   next();
// });

app.get('/api/v1/secret', onlyAuthUser, (req, res) => {
  const user = res.locals.user
  return res.json({message: `Super secret message to: ${user.username}`})
})

app.use('/api/v1/rentals', rentalRoutes);
//app.use('/api/v1/rentals',middleware, rentalRoutes);
app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/bookings', bookingRoutes);


app.listen(PORT, () => {
    console.log('Server is listening on port: ', PORT);
})