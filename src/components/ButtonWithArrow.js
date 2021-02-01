import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import ButtonWithArrowStyle from '../style/component/ButtonWithArrowStyle';
import COLOR from '../constants/COLOR';

export default ({
  style,
  textStyle,
  title,
  onPress,
  hideArrow,
  filters,
  text,
}) => (
  <TouchableOpacity
    style={[ButtonWithArrowStyle.mainStyle, style]}
    onPress={onPress}>
    {!filters && <Text style={[{fontSize: 15}, textStyle]}>{title}</Text>}
    {filters && (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}>
        <Text style={[{fontSize: 15}, textStyle]}>{title}</Text>
        <Text style={{alignSelf: 'flex-end', color: COLOR.WHITE}}>{text}</Text>
      </View>
    )}
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
