import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity} from 'react-native';
import TestsHeaderStyle from '../style/component/TestsHeaderStyle';

export default ({tabs, onPress, defaultTab}) => {
  const [current, setCurrent] = useState('');
  useEffect(() => {
    if (defaultTab) {
      setCurrent(defaultTab);
    }
  }, []);
  const onPressHandler = (text) => () => {
    setCurrent(text);
    onPress(text);
  };
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {tabs.map((el) => {
        return (
          <TouchableOpacity
            key={el}
            onPress={onPressHandler(el)}
            style={
              current === el
                ? TestsHeaderStyle.selected
                : TestsHeaderStyle.unselected
            }>
            <Text
              style={
                current === el
                  ? TestsHeaderStyle.selectedText
                  : TestsHeaderStyle.unselectedText
              }>
              {el}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};
