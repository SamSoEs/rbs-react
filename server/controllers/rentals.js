  const Rental = require('../models/Rental');
  exports.getRentals = (req, res) => {
    Rental.find({}, (err, foundRentals) => {
        if (err) {
            return res.status(422).send({errors: [{title: 'Rental Error!', message: 'Cannot retrieve rental data!'}]})
          }
      
          return res.json(foundRentals);     
    })
  }
  
  exports.getRentalById = (req, res) => {
    const { rentalId } = req.params;
    Rental.findById(rentalId, (error, foundRental) => {
        if (error) {
          return res.status(422).send({errors: [{title: 'Rental Error!', message: 'Cannot retrieve rental data!'}]})
        }
    
        return res.json(foundRental)
      })
  }
  
  exports.createRental = (req, res) => {
   
  }
  
 