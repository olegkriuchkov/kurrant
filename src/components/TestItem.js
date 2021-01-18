import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {observer} from 'mobx-react';
import TestsStyle from '../style/page/Tests/TestsStyle';
import ButtonItem from './ButtonItem';
import TestsStore from '../stores/TestsStore';

const TestItem = observer(({title, types, single = false}) => {
  const {TestItem, Test, setTestsItem} = TestsStore;
  const [flag, setFlag] = useState(false);
  const [singleFlag, setSingleFlag] = useState(false);
  console.log(TestItem);
  const [confirm, setConfirm] = useState(false);
  const success = () => {
    if (TestItem.length > 0) {
      setFlag(false);
      setConfirm(true);
    } else setFlag(false);
  };
  const toggleSingle = () => {
    setFlag(true);
    if (single) {
      setSingleFlag(!singleFlag);
    }
  };
  return (
    <TouchableOpacity
      onPress={() => {
        toggleSingle();
      }}
      style={singleFlag ? TestsStyle.singleMainItem : TestsStyle.mainItem}>
      {(single ? true : !flag) && !confirm && (
        <Text
          style={
            singleFlag ? TestsStyle.titleStyleSingle : TestsStyle.titleStyle
          }>
          {title}
        </Text>
      )}
      {flag &&
        !single &&
        types.map((type, index) => (
          <ButtonItem
            index={index}
            key={type}
            type={type}
            onPress={() => setTestsItem(type)}
            selected={TestItem}
          />
        ))}
      {flag && !single && (
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={TestsStyle.confirmButton}
            onPress={() => success()}>
            <Image
              source={require('../assets/confirmButton.png')}
              style={TestsStyle.confirmImage}
            />
          </TouchableOpacity>
        </View>
      )}
      {confirm && !flag && (
        <View style={TestsStyle.resultTitle}>
          <Text style={TestsStyle.resultTitleText}>{title}</Text>
          {TestItem.map((selectedText) => (
            <Text key={selectedText} style={TestsStyle.resultText}>
              {selectedText}
            </Text>
          ))}
        </View>
      )}
    </TouchableOpacity>
  );
});
export default TestItem;
