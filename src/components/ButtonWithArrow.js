import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import Icon from './Icon';
import ButtonWithArrowStyle from '../style/component/ButtonWithArrowStyle';

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
    style={[ButtonWithArrowStyle.mainStyle, style]}
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
