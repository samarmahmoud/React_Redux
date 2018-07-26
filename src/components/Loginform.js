import React ,{Component} from 'react';
import {Card,CardItems,Input,Button,style} from './common';
import {View ,Text} from 'react-native';
import {OnEmailChang ,OnPasswordChang} from '../actions/index';
import { connect } from 'tls';

 class Loginform extends Component{
    
    constructor(props) {
        super(props);
        this.state = {email: '',Password:''};
        
      }
OnEmailTextChang(text)
{
    this.props.OnEmailChang(text);
}
OnPasswordTextChang(text)
{
    this.props.OnPasswordChang(text);
}

    renderMessage(){
      
       if(this.state.email=="samar" && this.state.Password=="123")
       {
        alert("Done!");
       }
    }

    render(){
        return(
       
        <Card>
           <CardItems>
                <Input value={this.state.email}
                 onChangeText={this.OnEmailTextChang.bind(this)}
                 type="Email"
                 >
                </Input>
           </CardItems>
           <CardItems>
           <Input value={this.state.Password}
                 onChangeText={this.OnPasswordChang.bind(this)}
                 type="password"
                 >
           </Input>
           </CardItems>
           <CardItems>
            <Button title={"Login"} onPress={this.renderMessage.bind(this)}/>
              
          </CardItems>
        </Card>
       
        );
    }
};

export default connect(null,{OnEmailChang,OnPasswordChang}) (Loginform)  