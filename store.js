// import { createStore, combineReducers } from 'redux';
// import { productListReducer } from './src/reducer/product';

// const rootReducer = combineReducers({
//   productList: productListReducer,
// });

// const store = createStore(rootReducer);

// export default store;


import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Import redux-thunk
import { productListReducer } from './src/reducer/product';

const rootReducer = combineReducers({
  productList: productListReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk)); // Apply redux-thunk middleware

export default store;
