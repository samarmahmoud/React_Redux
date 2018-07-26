import React from 'react';
import {View} from 'react-native';
import {style} from './style'


const Card=(props)=>
{

    return(
        <View style={style.ContainerStyle }>
          {props.children}
        </View>
    );
};

export {Card};