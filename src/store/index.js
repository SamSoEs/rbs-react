import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rentals from './reducers/rentals';
import rental from './reducers/rental';


// const addThunkToDispatch = (store) => {
//   const { dispatch } = store;
//   return action => {
//     if (typeof action === 'function') {
//       return action(dispatch);
//     }
//     dispatch(action);
//   }
// }


const reducers = combineReducers({
  rentals,
  rental
})

const store = createStore(reducers, applyMiddleware(thunk));
// store.dispatch = addThunkToDispatch(store);

export default store;