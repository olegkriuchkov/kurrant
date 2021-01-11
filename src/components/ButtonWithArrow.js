import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import Icon from './Icon';

export default ({
  style,
  textStyle,
  title,
  onPress,
  hideArrow,
  icon,
  iconStyle,
}) => (
  <TouchableOpacity
    style={[
      {
        width: '100%',
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      style,
    ]}
    onPress={onPress}>
    <Text style={[{fontSize: 15}, textStyle]}>{title}</Text>
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}>
      {!hideArrow && <Icon style={iconStyle} iconType={icon || 'rightArrow'} />}
    </View>
  </TouchableOpacity>
);
