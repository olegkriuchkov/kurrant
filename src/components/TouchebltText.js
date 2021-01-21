import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export default ({containerStyle, style, text, onPress}) => {
  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      <Text style={style}>{text}</Text>
    </TouchableOpacity>
  );
};
