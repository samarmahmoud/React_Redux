import React from 'react';
import {TextInput,View} from 'react-native';
import styles from './style';

const Input =(props)=>{
 
    return(
   <View style={styles.container}>
    <TextInput
            value={props.value}
            onChangeText={props.onChangeText}
            placeholder={props.placeholder}
            placeholderTextColor="#4a73ab" underlineColorAndroid='transparent'
            underlineColorAndroid='transparent'
            style={styles.TextStyle} >
          </TextInput>
   </View>
 );
};

export {Input};