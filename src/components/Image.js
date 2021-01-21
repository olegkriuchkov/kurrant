import {Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default ({style, path, onPress, containerStyle}) => (
  <TouchableOpacity onPress={onPress} style={containerStyle}>
    <Image style={style} source={path} />
  </TouchableOpacity>
);
