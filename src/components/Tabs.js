import {ScrollView, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
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
