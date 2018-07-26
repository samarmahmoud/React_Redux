import {ON_Email_Changes,ON_Password_Changes} from './types';

export const CHANGE_EMAIL=(text)=>{
    type : ON_Email_Changes,
    payload:text
};
export const CHANGE_PASSWORD=(text)=>{
     type : ON_Password_Changes,
     payload: text,
};