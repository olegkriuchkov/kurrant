import React, {useState} from 'react';
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
  icon,
  transformarrow,
}) => {
  const [arrowFalg, setArrowFalg] = useState(false);
  return (
    <TouchableOpacity
      style={[ButtonWithArrowStyle.mainStyle, style]}
      onPress={() => {
        onPress();
        transformarrow && setArrowFalg(!arrowFalg);
      }}>
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
          <TouchableOpacity onPress={onPress} style={{alignSelf: 'flex-end'}}>
            <Text style={{color: COLOR.WHITE}}>{text}</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={ButtonWithArrowStyle.imageWrapper}>
        {!hideArrow && (
          <Image
            style={
              arrowFalg
                ? [ButtonWithArrowStyle.image, {transform: [{rotate: '90deg'}]}]
                : ButtonWithArrowStyle.image
            }
            source={require('../assets/buttonArrow.png')}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};
