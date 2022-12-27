
const mongoose = require('mongoose');
const FakeDB = require('./FakeDB');

mongoose.connect('mongodb+srv://samaneghbali1:Sa12344321@cluster0.kx9khxy.mongodb.net/rbs-react?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, async () => {
  const fakeDB = new FakeDB();
  console.log('Starting populating DB');
  await fakeDB.populate();
  await mongoose.connection.close();
  console.log('DB has been populated!');
});