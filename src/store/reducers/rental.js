import { combineReducers } from "redux";

const item = (state = {}, action) => {
  switch (action.type) {
    case 'UNMOUNT_RENTAL':
      return {};
    case 'FETCH_RENTAL_BY_ID':
      return action.rental;
    default:
      return state;
  }
}

const isFetching = (state = false, action) => {
  switch(action.type) {
    case 'IS_FETCHING_RENTAL':
      return true;
    case 'FETCH_RENTAL_BY_ID':
      return false;
    default:
      return state;
  }
}


const rental = combineReducers({item, isFetching});


export default rental;