import {combineReducers} from 'redux';
import LibraryReducer from './LibraryReducer';

// combine all reducers in one fuction

const AppReducers= combineReducers(
    {
        libraries:LibraryReducer  // this is the reducer that return data
        }
);

export default AppReducers;
