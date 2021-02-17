import {observer} from 'mobx-react';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import COLOR from '../constants/COLOR';
import TestsStyle from '../style/page/Tests/TestsStyle';

export default observer(
  ({type, index, onPress, selected, testing, hookup, title}) => {
    const style = [
      TestsStyle.topItem,
      TestsStyle.midelItem,
      TestsStyle.bottomItem,
    ];
    const selectedConteiner = selected.includes(type)
      ? [
          style[index],
          testing || hookup
            ? [
                TestsStyle.selectedItem,
                {backgroundColor: COLOR.PINK, borderColor: COLOR.PINK},
              ]
            : TestsStyle.selectedItem,
        ]
      : style[index];
    const selectedText = selected.includes(type)
      ? TestsStyle.textColor
      : testing || hookup
      ? [TestsStyle.textColorSelected, {color: COLOR.PINK}]
      : TestsStyle.textColorSelected;

    return (
      <TouchableOpacity style={selectedConteiner} onPress={onPress}>
        <Text style={selectedText}>{type}</Text>
      </TouchableOpacity>
    );
  },
);
