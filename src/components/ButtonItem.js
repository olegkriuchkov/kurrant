import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {observer} from 'mobx-react';
import COLOR from '../constants/COLOR';
import TestsStyle from '../style/page/Tests/TestsStyle';
import TestsStore from '../stores/TestsStore';

export default observer(({type, index, onPress}) => {
  const {TestItem} = TestsStore;
  const style = [
    TestsStyle.topItem,
    TestsStyle.midelItem,
    TestsStyle.bottomItem,
  ];
  return (
    <TouchableOpacity
      style={
        TestItem.includes(type)
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
          TestItem.includes(type)
            ? TestsStyle.textColor
            : TestsStyle.textColorSelected
        }>
        {type}
      </Text>
    </TouchableOpacity>
  );
});
