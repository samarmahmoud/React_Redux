import React from 'react';
import {View} from 'react-native';
import {style} from './style';

const CardItems =(props)=>
{
  return(
<View style={style.ContainerCardItemStyle}>
{props.children}
</View>
  );
};
 
export {CardItems} ;