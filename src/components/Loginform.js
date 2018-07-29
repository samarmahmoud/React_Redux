import React ,{Component} from 'react';
import { connect } from 'react-redux';
import {Card,CardItems,Input,Button} from './common';
import {CHANGE_EMAIL ,CHANGE_PASSWORD,LoginFun} from '../actions/index';
import {Actions} from 'react-native-router-flux';

 class Loginform extends Component{
    
       
OnEmailTextChang(text)
{
   this.props.CHANGE_EMAIL(text);
} 
OnPasswordTextChang(text)
{
    this.props.CHANGE_PASSWORD(text);
}
OnSubmitButton()
{
    const userAuth={
        email:this.props.email,
        password:this.props.password
    }
  
     this.props.LoginFun(this.props.email,this.props.password);
    
}
 
    render(){
        return(
       
        <Card>
           <CardItems>
                <Input value={mapState.email}
                 onChangeText={this.OnEmailTextChang.bind(this)}
                 type="Email"
                 >
                </Input>
           </CardItems>
           <CardItems>
           <Input value={mapState.password}
                 onChangeText={this.OnPasswordTextChang.bind(this)}
                 type="password"
                 >
           </Input>
           </CardItems>
           <CardItems>
            <Button title={"Login"} onPress={this.OnSubmitButton.bind(this)} />
            
        
          </CardItems>
        </Card>  
       
        ); 
    }
};
 
const mapState=state=>{
    return{
        email: state.Authen.email,
        password:state.Authen.password
    };
};

export default connect(mapState,{CHANGE_EMAIL,CHANGE_PASSWORD,LoginFun}) (Loginform)  