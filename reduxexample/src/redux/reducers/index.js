import {combineReducers} from 'redux';

import ContactReducer from './ContactReducer';
// root reducer
export default combineReducers({
    ContactReducer: ContactReducer
})

// import rootReducer from './redux/reducers'

