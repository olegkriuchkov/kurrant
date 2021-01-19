import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {observer} from 'mobx-react';
import TestsStyle from '../style/page/Tests/TestsStyle';
import ButtonItem from './ButtonItem';
import TestsStore from '../stores/TestsStore';

export default observer(({title, types}) => {
  const {setTestsItem, TestSuccess} = TestsStore;
  const [flag, setFlag] = useState(false);
  const [selected, setSelected] = useState([]);
  const select = (title) => {
    selected.includes(title)
      ? setSelected((prev) => prev.filter((e) => e !== title))
      : setSelected((prev) => [...prev, title]);
  };
  const [confirm, setConfirm] = useState(false);
  useEffect(() => {
    setFlag(false);
    if (selected.length > 0) {
      setConfirm(true);
      setTestsItem({title, result: selected});
    }
  }, [TestSuccess]);

  const toggleSingleSelect = () => {
    if (TestSuccess) {
      setFlag(true);
    }
  };
  const testSuccess = () => {
    if (TestSuccess) {
      setFlag(true);
      if (selected.length > 0) {
        setFlag(false);
        setConfirm(true);
        setTestsItem({title, result: selected});
      } else {
        setFlag(false);
      }
    }
  };
  return (
    <TouchableOpacity
      onPress={() => {
        toggleSingleSelect();
      }}
      style={TestsStyle.mainItem}>
      {!flag && !confirm && <Text style={TestsStyle.titleStyle}>{title}</Text>}
      {flag &&
        types.map((type, index) => (
          <ButtonItem
            index={index}
            key={type}
            type={type}
            onPress={() => select(type)}
            selected={selected}
          />
        ))}
      {flag && (
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={TestsStyle.confirmButton}
            onPress={() => testSuccess()}>
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
          {selected.map((selectedText) => (
            <Text key={selectedText} style={TestsStyle.resultText}>
              {selectedText}
            </Text>
          ))}
        </View>
      )}
    </TouchableOpacity>
  );
});
