import {combineReducers} from 'redux';
import AuthenReducer from'./AuthReducer';


// combine all reducers in one fuction

const AppReducers= combineReducers(
    {
       Authen:AuthenReducer
   }
);

export default AppReducers;
