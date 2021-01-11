import React from 'react';
import {View} from 'react-native';
import {Plus} from '../assets/buttonPlus';
import ArrowBack from '../assets/ArrowBack';

const icons = {
  plus: Plus,
  arrowBack: ArrowBack,
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
