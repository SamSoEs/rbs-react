  const Rental = require('../models/Rental');
  exports.getRentals = (req, res) => {
    Rental.find({}, (err, foundRentals) => {
        if (err) {
          return Rental
          .sendError(res, { status: 422, detail: 'Cannot retrieve rental data!'});
          }
      
          return res.json(foundRentals);     
    })
  }
  
  exports.getRentalById = (req, res) => {
    const { rentalId } = req.params;
    Rental.findById(rentalId, (error, foundRental) => {
        if (error) {
          return Rental
        .sendError(res, { status: 422, detail: 'Cannot retrieve rental data!'});
        }
    
        return res.json(foundRental)
      })
  }
  
  exports.createRental = (req, res) => {
    const rentalData = req.body;
  // const newRental = new Rental(rentalData);

  // newRental.save((error, createdRental) => {
    // if (error) {
    //   return res.status(422).send({errors: [{title: 'Rental Error!', message: 'Cannot post rental data!'}]})
    // }

    // return res.json({message: `Rental with id: ${createdRental._id} was added!`});
  // })

  Rental.create(rentalData, (error, createdRental) => {
    if (error) {
      return Rental
        .sendError(res, { status: 422, detail: 'Cannot post data!'});
    }

    return res.json({message: `Rental with id: ${createdRental._id} was added!`});
  })
  }
  
 