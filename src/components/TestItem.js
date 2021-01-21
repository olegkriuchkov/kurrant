import {toJS} from 'mobx';
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {observer} from 'mobx-react';
import {v4 as uuidv4} from 'uuid';
import Image from './Image';
import TestsStyle from '../style/page/Tests/TestsStyle';
import ButtonItem from './ButtonItem';
import TestsStore from '../stores/TestsStore';

export default observer(({title, types, sucess = false, result}) => {
  const {setTestsItem, TestSuccess, TestItems} = TestsStore;
  const [flag, setFlag] = useState(false);
  const [selected, setSelected] = useState(result || []);
  const [confirm, setConfirm] = useState(sucess);
  const currentItem = TestItems.find((e) => e.title === title);
  const select = (title) => {
    selected.includes(title)
      ? setSelected((prev) => prev.filter((e) => e !== title))
      : setSelected((prev) => [...prev, title]);
  };

  useEffect(() => {
    setFlag(false);
    if (!confirm) {
      setSelected([]);
    }
  }, [TestSuccess]);

  const setTest = (result) => {
    setTestsItem({
      title,
      result,
      id: currentItem ? currentItem.id : uuidv4(),
    });
  };
  const toggleSingleSelect = () => {
    if (TestSuccess) {
      setFlag(true);
    }
  };
  const testSuccess = () => {
    if (TestSuccess) {
      if (selected.length > 0) {
        setFlag(false);
        setConfirm(true);
        setTest(selected);
      } else {
        setFlag(false);
        setTest(selected);
      }
      if (selected.length === 0) {
        setConfirm(false);
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
          <Image
            path={require('../assets/confirmButton.png')}
            style={TestsStyle.confirmImage}
            containerStyle={[TestsStore.confirmButton, {bottom: 30, left: 80}]}
            onPress={() => testSuccess()}
          />
        </View>
      )}
      {confirm && !flag && (
        <View style={TestsStyle.resultTitle}>
          <Text style={TestsStyle.resultTitleText}>{title}</Text>
          {(result || selected).map((selectedText) => (
            <Text key={selectedText} style={TestsStyle.resultText}>
              {selectedText}
            </Text>
          ))}
        </View>
      )}
    </TouchableOpacity>
  );
});
