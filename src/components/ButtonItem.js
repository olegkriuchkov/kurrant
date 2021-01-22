import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {observer} from 'mobx-react';
import COLOR from '../constants/COLOR';
import TestsStyle from '../style/page/Tests/TestsStyle';

export default observer(({type, index, onPress, selected}) => {
  const style = [
    TestsStyle.topItem,
    TestsStyle.midelItem,
    TestsStyle.bottomItem,
  ];
  const selectedConteiner = selected.includes(type)
    ? [style[index], TestsStyle.selectedItem]
    : style[index];
  const selectedText = selected.includes(type)
    ? TestsStyle.textColor
    : TestsStyle.textColorSelected;

  return (
    <TouchableOpacity style={selectedConteiner} onPress={onPress}>
      <Text style={selectedText}>{type}</Text>
    </TouchableOpacity>
  );
});
