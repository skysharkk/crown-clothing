import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './root-reducer';

const middleWares = [thunk];
const composeEnhancers =
	process.env.NODE_ENV === 'development'
		? composeWithDevTools(applyMiddleware(...middleWares))
		: applyMiddleware(...middleWares);
const store = createStore(rootReducer, composeEnhancers);

export default store;
