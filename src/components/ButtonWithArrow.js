import React from 'react';
import {TouchableOpacity, Image, Text, View} from 'react-native';
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
      {!hideArrow && (
        <Image
          style={{width: 15, height: 15, marginRight: 5}}
          source={require('../assets/buttonArrow.png')}
        />
      )}
    </View>
  </TouchableOpacity>
);
