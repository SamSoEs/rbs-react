import AxiosService from 'services/AxiosService';
const { bwmAxios } = AxiosService;
export const fetchRentals = () =>
dispatch => {
    bwmAxios.get('/rentals').then(res => {
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
    const res = await bwmAxios.get(`/rentals/${rentalId}`)
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



