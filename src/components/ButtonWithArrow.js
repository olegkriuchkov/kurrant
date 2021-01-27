import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import ButtonWithArrowStyle from '../style/component/ButtonWithArrowStyle';

export default ({style, textStyle, title, onPress, hideArrow}) => (
  <TouchableOpacity
    style={[ButtonWithArrowStyle.mainStyle, style]}
    onPress={onPress}>
    <Text style={[{fontSize: 15}, textStyle]}>{title}</Text>
    <View style={ButtonWithArrowStyle.imageWrapper}>
      {!hideArrow && (
        <Image
          style={ButtonWithArrowStyle.image}
          source={require('../assets/buttonArrow.png')}
        />
      )}
    </View>
  </TouchableOpacity>
);
