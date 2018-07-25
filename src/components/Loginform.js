import React ,{Component} from 'react';
import {Card,CardItems,Input,Button} from './common';

export default class Loginform extends Component{
    constructor(props) {
        super(props);
        this.state = {userName: '',Password:''};
      }
    render(){
        return(
       
        <Card>
           <CardItems>
                <Input value={this.state.userName}
                 onChangeText={userName=>this.setState({userName})}
                 placeholder="user name"
                 
                 >
                </Input>
           </CardItems>
           <CardItems>
           <Input value={this.state.Password}
                 onChangeText={userName=>this.setState({Password})}
                 placeholder="password"
                 >
           </Input>
           </CardItems>
           <CardItems>
            <Button
               title={'Login'} onPress={()=>{}}/>
          </CardItems>
        </Card>
       
        );
    }
};