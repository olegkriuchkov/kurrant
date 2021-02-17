import {observer} from 'mobx-react';
import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity} from 'react-native';
import TestsStore from '../stores/TestsStore';
import TestsHeaderStyle from '../style/component/TestsHeaderStyle';

export default observer(({tab, onPress, defaultTab}) => {
  const [current, setCurrent] = useState('');
  const {testSuccess, beforeResult, tabs, beforeSaving} = TestsStore;
  useEffect(() => {
    if (defaultTab) {
      setCurrent(defaultTab);
    }
  }, []);

  useEffect(() => {
    if (defaultTab) {
      setCurrent(defaultTab);
    }
  }, [testSuccess]);
  const onPressHandler = (text) => () => {
    setCurrent(text);
    onPress(text);
  };
  useEffect(() => {
    if (beforeResult) {
      setCurrent('What were you tested for?');
    }
    if (beforeSaving) {
      setCurrent('Results');
    }
  }, [tabs]);

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {tab.map((el) => {
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
});
