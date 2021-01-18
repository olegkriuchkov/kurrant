import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import TestsStyle from '../style/page/Tests/TestsStyle';
import ButtonItem from './ButtonItem';

const TestItem = ({title, types, single = false}) => {
  const [flag, setFlag] = useState(false);
  const [selected, setSelected] = useState([]);
  const [singleFlag, setSingleFlag] = useState(false);
  const select = (title) => {
    selected.includes(title)
      ? setSelected((prev) => prev.filter((e) => e !== title))
      : setSelected((prev) => [...prev, title]);
  };
  const [confirm, setConfirm] = useState(false);
  const success = () => {
    if (selected.length > 0) {
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
            onPress={() => select(type)}
            selected={selected}
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
          {selected.map((selectedText) => (
            <Text key={selectedText} style={TestsStyle.resultText}>
              {selectedText}
            </Text>
          ))}
        </View>
      )}
    </TouchableOpacity>
  );
};
export default TestItem;
