import {combineReducers} from 'redux';
import reducerList from './ReducerList';


// combine all reducers in one fuction

const AppReducers= combineReducers(
    {
        libraries: ()=>[]
   }
);

export default AppReducers;
