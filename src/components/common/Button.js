import React from 'react';
import {Text,TouchableOpacity} from 'react-native';
import styles from './style';

const Button =(props)=>{
   
    return(
        <TouchableOpacity>
        <Text style={styles.ButtonStyle} >{props.title}</Text>
        </TouchableOpacity>
    );
}

export {Button};