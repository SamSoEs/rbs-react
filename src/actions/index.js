import axios from 'axios';
import AxiosService from 'services/AxiosService';
const { bwmAxios } = AxiosService;


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
        dispatch({ type: 'IS_FETCHING_RENTAL' });
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

    // const token = localStorage.getItem('bwm_token');

    // const config = {
    //     headers: {
    //         Authorization: `Bearer ${token}`
    //     }
    // }

    return bwmAxios.post('rentals', rental);
}


export const registerUser = (registerData) => {
    return axios
        .post('http://localhost:3001/api/v1/users/register', registerData)
        .catch(error => {
            return Promise.reject(error);
        })
}

export const loginUser = (loginData) => {
    return axios
        .post('http://localhost:3001/api/v1/users/login', loginData)
        .then(res => res.data)
        .catch(error => Promise.reject(error.response.data))
}

export const userAuthenticated = (decodedToken) => {
    return {
        type: 'USER_AUTHENTICATED',
        username: decodedToken.username || ''
    }
}