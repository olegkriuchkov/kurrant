import {Text, TouchableOpacity, View, Image} from 'react-native';
import React, {useState} from 'react';
import TestsStyle from '../style/page/Tests/TestsStyle';

const TestItem = ({title}) => {
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
      {flag && (
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={
              selected.includes('Rectal')
                ? TestsStyle.topItemSelected
                : TestsStyle.topItem
            }
            onPress={() => select('Rectal')}>
            <Text
              style={
                selected.includes('Rectal')
                  ? TestsStyle.textColor
                  : TestsStyle.textColorSelected
              }>
              Rectal
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              selected.includes('Throat')
                ? TestsStyle.midelItemSelected
                : TestsStyle.midelItem
            }
            onPress={() => select('Throat')}>
            <Text
              style={
                selected.includes('Throat')
                  ? TestsStyle.textColor
                  : TestsStyle.textColorSelected
              }>
              Throat
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              selected.includes('Urine')
                ? TestsStyle.bottomItemSelected
                : TestsStyle.bottomItem
            }
            onPress={() => select('Urine')}>
            <Text
              style={
                selected.includes('Urine')
                  ? TestsStyle.textColor
                  : TestsStyle.textColorSelected
              }>
              Rectal
            </Text>
          </TouchableOpacity>
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
