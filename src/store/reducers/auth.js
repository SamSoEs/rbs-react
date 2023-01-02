import { combineReducers } from 'redux';

const isAuth  = (state = false, action) => {
    switch(action.type) {
      case 'USER_AUTHENTICATED':
        return true;
      default:
        return state;
    }
  }

  const username = (state = '', action) => {
    switch(action.type) {
      case 'USER_AUTHENTICATED':
        return action.username;
      default:
        return state;
    }
  }
const auth = combineReducers({isAuth, username});
export default auth;