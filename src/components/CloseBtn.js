import React from 'react';
import {TouchableOpacity} from 'react-native';
import COLOR from '../constants/COLOR';
import Close from './icons/Close';

export const CloseBtn = ({
  iconColor = COLOR.WHITE,
  onPress,
  containerStyle,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={containerStyle}>
      <Close fill={iconColor} />
    </TouchableOpacity>
  );
};
