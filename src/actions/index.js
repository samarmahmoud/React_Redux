import {ON_Email_Changes,ON_Password_Changes} from './types';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';


export const CHANGE_EMAIL=(text)=>{
    return{
        type : ON_Email_Changes,
        payload:text
    }
    
};
export const CHANGE_PASSWORD=(text)=>{
    return{
        type : ON_Password_Changes,
        payload: text,
    }
   
};
export const LoginFun=(email,password)=>{

   return (dispatch)=>{
       firebase.auth().signInWithEmailAndPassword(email,password)
       .then(Actions.MainPage());    
         
   
    };
};
    