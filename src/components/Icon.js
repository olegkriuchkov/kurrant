import React from 'react';
import {View} from 'react-native';
import {Plus} from '../assets/buttonPlus';

const icons = {
  plus: Plus,
};

export default ({width, height, viewBox, fill, color, iconType, style}) => {
  const IconComponent = icons[iconType];

  return (
    <View style={style}>
      <IconComponent
        height={height}
        width={width}
        viewBox={viewBox}
        fill={fill}
        color={color}
      />
    </View>
  );
};
