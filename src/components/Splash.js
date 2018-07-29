import React from 'react';
import {View ,Text} from 'react-native';
import {Actions} from 'react-native-router-flux';




export default class WelcomeScreen extends React.Component{
     
    componentWillMount(){
        setTimeout(this.onTimeChange.bind(this) ,3000);
    }
    onTimeChange()
    {
        return (Actions.auth());
    }

    render(){
        return(
            <View style={style.container}>
              <Text style={style.TextStyle}>ToDo</Text>
            </View>
        );
    }
}

  
const style={
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#4a73ab',
    },
    TextStyle:{
        fontSize:30,
        color:'#fff'
    }
}