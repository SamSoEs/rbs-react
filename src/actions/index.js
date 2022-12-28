import axios from 'axios';

export const fetchRentals = (rentals) => {    

    return {
        type: 'FETCH_RENTALS',
        rentals
    }
}

export const fetchRentalById = (rentalId) => {

    return {
        type: 'FETCH_RENTAL_BY_ID',
        rentals: []
    }
}

export const createRental = rental => {
    return {
        type: 'CREATE_RENTAL',
        rental
    }
}