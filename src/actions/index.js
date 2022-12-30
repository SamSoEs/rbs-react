import axios from 'axios';
import rental from 'store/reducers/rental';

export const fetchRentals = () =>
    dispatch => {
        axios.get('http://localhost:3001/api/v1/rentals').then(res => {
            const rentals = res.data;
            dispatch({
                type: 'FETCH_RENTALS',
                rentals
            });
        })
    }


export const fetchRentalById = rentalId => 
     async dispatch => {
        dispatch({type: 'IS_FETCHING_RENTAL'});
        const res = await axios.get(`http://localhost:3001/api/v1/rentals/${rentalId}`)
        dispatch({
            type: 'FETCH_RENTAL_BY_ID',
            rental: res.data
        }); 
    }

    // dispatch => {
    //     axios.get(`http://localhost:3001/api/v1/rentals/${rentalId}`).then(res => {
    //         const rental = res.data;
    //         dispatch({
    //             type: 'FETCH_RENTAL_BY_ID',
    //             rental
    //         });
    //     })
    // }

export const createRental = rental => {
    return {
        type: 'CREATE_RENTAL',
        rental
    }
}


export const registerUser = (registerData) => {
    return axios
      .post('/api/v1/users/register', registerData)
      .catch(error => {
        return Promise.reject(error);
      })
  }