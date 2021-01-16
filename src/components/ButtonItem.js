import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import COLOR from '../constants/COLOR';
import TestsStyle from '../style/page/Tests/TestsStyle';

const ButtonItem = ({type, index, onPress, selected}) => {
  const style = [
    TestsStyle.topItem,
    TestsStyle.midelItem,
    TestsStyle.bottomItem,
  ];
  return (
    <TouchableOpacity
      style={
        selected.includes(type)
          ? [
              style[index],
              {
                borderColor: COLOR.PINK,
                backgroundColor: COLOR.PINK,
                borderBottomColor: COLOR.BLUE,
              },
            ]
          : style[index]
      }
      onPress={onPress}>
      <Text
        style={
          selected.includes(type)
            ? TestsStyle.textColor
            : TestsStyle.textColorSelected
        }>
        {type}
      </Text>
    </TouchableOpacity>
  );
};
export default ButtonItem;
