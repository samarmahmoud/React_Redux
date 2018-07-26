import React from 'react';
import {Text,TouchableOpacity} from 'react-native';
import {style} from './style';

const Button =(props)=>{
   
    return(
        <TouchableOpacity style={style.ButtonStyle} >
        <Text style={style.ButtonTextStyle} >{props.title}</Text>
        </TouchableOpacity>
    );
}

export {Button};