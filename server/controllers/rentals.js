  const Rental = require('../models/Rental');
  exports.getRentals = (req, res) => {
    Rental.find({}, (err, foundRentals) => {
        if (err) {
          return res.mongoError(error);
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
    rentalData.owner = res.locals.user;
  // const newRental = new Rental(rentalData);

  // newRental.save((error, createdRental) => {
    // if (error) {
    //   return res.status(422).send({errors: [{title: 'Rental Error!', message: 'Cannot post rental data!'}]})
    // }

    // return res.json({message: `Rental with id: ${createdRental._id} was added!`});
  // })

  Rental.create(rentalData, (error, createdRental) => {
    if (error) {
      return res.mongoError(error);
    }

    return res.json(createdRental);

  })
  }
  
 
exports.isUserRentalOwner = (req, res, next) => {
  const { rental } = req.body;
  const user = res.locals.user;

  Rental
    .findById(rental)
    .populate('owner')
    .exec((error, foundRental) => {
      if (error) { return res.mongoError(error); }

      if (foundRental.owner.id === user.id) {
        return res
          .sendApiError(
            { title: 'Invalid User', 
              detail: 'Cannot create booking on your rental'});
      }

      next();
    })
}
