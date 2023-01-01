const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/dev');
const { provideErrorHandler } = require('./middlewares');
//routes
const rentalRoutes = require('./routes/rentals');
const usersRoutes = require('./routes/users');

const { onlyAuthUser } = require('./controllers/users');

//models
require('./models/rental');
require('./models/user');


const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect('mongodb+srv://samaneghbali1:Sa12344321@cluster0.kx9khxy.mongodb.net/rbs-react?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, () => {
  console.log('Connected to DB!')
});


//middlewares
app.use(bodyParser.json())
app.use(provideErrorHandler);

// const middleware = (req, res, next) => {
//   const isError = false;
//   console.log('Hello World!');
//   if (!isError) { 
//     req.someProp = "Hello World"
//     return next(); 
//   }

//   return res.status(422).send('We got error!');
// }

// app.use(middleware);
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api/v1/secret', onlyAuthUser, (req, res) => {
  const user = res.locals.user
  return res.json({message: `Super secret message to: ${user.username}`})
})

app.use('/api/v1/rentals', rentalRoutes);
//app.use('/api/v1/rentals',middleware, rentalRoutes);
app.use('/api/v1/users', usersRoutes);


app.listen(PORT, () => {
    console.log('Server is listening on port: ', PORT);
})