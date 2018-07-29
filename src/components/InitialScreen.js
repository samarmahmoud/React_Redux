import React from 'react';
import {View ,Text} from 'react-native';
import {style} from './common/style'


export default class WelcomeScreen extends React.Component{
    render(){
        return(
            <View style={style.container}>
                <Text>Welcome</Text>
            </View>
        );
    }
}