import {Text, TouchableOpacity, View, Image} from 'react-native';
import React, {useState} from 'react';
import TestsStyle from '../style/page/Tests/TestsStyle';
import ButtonItem from './ButtonItem';

const TestItem = ({title, types}) => {
  const [flag, setFlag] = useState(false);
  const [selected, setSelected] = useState([]);
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
  return (
    <TouchableOpacity
      onPress={() => (confirm ? {} : setFlag(true))}
      style={TestsStyle.mainItem}>
      {!flag && !confirm && <Text style={TestsStyle.titleStyle}>{title}</Text>}
      {flag &&
        types.map((type, index) => (
          <ButtonItem
            index={index}
            type={type}
            onPress={() => select(type)}
            selected={selected}
          />
        ))}
      {flag && (
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
      {confirm && (
        <View style={TestsStyle.resultTitle}>
          <Text style={TestsStyle.resultTitleText}>{title}</Text>
          {selected.map((selectedText) => (
            <Text style={TestsStyle.resultText}>{selectedText}</Text>
          ))}
        </View>
      )}
    </TouchableOpacity>
  );
};
export default TestItem;
