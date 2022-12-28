import axios from 'axios';

export const fetchRentals = () => { 
   return axios.get('http://localhost:3001/api/v1/rentals').then(res => {
            const rentals = res.data;
            return {
                type: 'FETCH_RENTALS',
                rentals
            }
        })

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