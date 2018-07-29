import {ON_Email_Changes,ON_Password_Changes} from '../actions/types';

const inital_state={
    email:'',
    password:'',
    user:''
};
export default (state=inital_state,action)=>{
    console.log(action.type);
    switch(action.type){
        case ON_Email_Changes :
          return{...state,email:action.payload}
        
        break;
        case ON_Password_Changes :
        return{...state,password:action.payload}
        break;
        
        default:
        return state;
    }

}