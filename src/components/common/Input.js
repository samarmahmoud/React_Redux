import React from 'react';
import {TextInput,View} from 'react-native';
import {style} from './style';

const Input =(props)=>{
 
  let keyboardType='default',secureInpute=false,placeholder='';
  
    switch(props.type){
        case "password":{
           secureInpute=true;
           placeholder="Password";
            
        }
        break;
        case "Email":{
          keyboardType='email-address';
          placeholder="username@gmail"
        }
        break;
        default :{
          keyboardType='default',
          secureInpute=false,
          placeholder='';
        }

    
    
  }
    return(
   <View style={style.container}>
    <TextInput
            value={props.value}
            onChangeText={props.onChangeText}
            placeholder={placeholder}
            placeholderTextColor="#ddd" 
            underlineColorAndroid='transparent'
            secureTextEntry={secureInpute}
            keyboardType={keyboardType}
            style={style.TextStyle} >
          </TextInput>
   </View>
 );
};

export {Input};