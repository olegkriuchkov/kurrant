import React from 'react';
import {View} from 'react-native';
import ArrowBack from '../assets/ArrowBack';
import {Plus} from '../assets/buttonPlus';
import RightArrow from '../assets/rightArrow';

const icons = {
  plus: Plus,
  arrowBack: ArrowBack,
  rightArrow: RightArrow,
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
