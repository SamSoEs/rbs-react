const mongoose = require('mongoose');

const id1 = mongoose.Types.ObjectId();
const id2 = mongoose.Types.ObjectId(); 
exports.users = [{
  _id: id1,
  username: "Test User",
  email: "test@gmail.com",
  password: "testtest"
}, {
  _id: id2,
  username: "Test User2",
  email: "test2@gmail.com",
  password: "testtest2"
}]

exports.rentals = [{
    title: "Nice view on ocean",
    city: "San Francisco",
    street: "Liberty street",
    category: "condo",
    image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
    numOfRooms: 4,
    shared: true,
    description: "Very nice apartment in center of the city.",
    dailyPrice: 43,
    owner: id1
  },
  {
    title: "Modern apartment in center",
    city: "New York",
    street: "Time Square",
    category: "apartment",
    image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
    numOfRooms: 1,
    shared: false,
    description: "Very nice apartment in center of the city.",
    dailyPrice: 11,
    owner: id1
  },
  {
    title: "Old house in nature",
    city: "Bratislava",
    street: "Letna 7",
    category: "house",
    image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
    numOfRooms: 5,
    shared: true,
    description: "Very nice apartment in center of the city.",
    dailyPrice: 23,
    owner: id2
  }]
  
