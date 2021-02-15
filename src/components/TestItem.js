import {observer} from 'mobx-react';
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import COLOR from '../constants/COLOR';
import TestsStore from '../stores/TestsStore';
import TestsStyle from '../style/page/Tests/TestsStyle';
import ButtonItem from './ButtonItem';
import Image from './Image';

export default observer(
  ({title, types, sucess = false, result, current, testing}) => {
    const {setTestsItem, testSuccess, testItems, tests} = TestsStore;
    const [flag, setFlag] = useState(false);
    const [selected, setSelected] = useState(result || []);
    const [confirm, setConfirm] = useState(sucess);
    const currentItem = testItems.find((e) => e.title === title);
    const select = (title) => {
      selected.includes(title)
        ? setSelected((prev) => prev.filter((e) => e !== title))
        : setSelected((prev) => [...prev, title]);
    };

    useEffect(() => {
      if (current?.title === title) {
        setFlag(false);
        setConfirm(true);
        setSelected(current.result);
      } else {
        setFlag(false);
      }
      if (!confirm) {
        setSelected([]);
      }
    }, [current, tests]);

    const setTest = (result) => {
      setTestsItem({
        title,
        result,
        id: currentItem ? currentItem.id : uuidv4(),
      });
    };
    const toggleSingleSelect = () => {
      if (testSuccess) {
        setFlag(true);
      }
    };
    const testsSuccess = () => {
      if (testSuccess) {
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
          if (title === 'Full screening (All)') {
            setFlag(false);
            setConfirm(!confirm);
          }
        }}
        style={TestsStyle.mainItem}>
        {!flag && !confirm && (
          <Text style={TestsStyle.titleStyle}>{title}</Text>
        )}
        {flag &&
          title !== 'Full screening (All)' &&
          types.map((type, index) => (
            <ButtonItem
              index={index}
              key={type}
              type={type}
              onPress={() => select(type)}
              selected={selected}
              testing={testing}
            />
          ))}
        {flag && (
          <View style={{alignItems: 'center'}}>
            <Image
              path={require('../assets/confirmButton.png')}
              style={TestsStyle.confirmImage}
              containerStyle={[
                TestsStore.confirmButton,
                {bottom: 30, left: 80},
              ]}
              onPress={() => testsSuccess()}
            />
          </View>
        )}
        {confirm && !flag && (
          <View
            style={
              testing
                ? [TestsStyle.resultTitle, {backgroundColor: COLOR.PINK}]
                : TestsStyle.resultTitle
            }>
            <Text style={TestsStyle.resultTitleText}>{title}</Text>
            {(result || selected).map((selectedText) => {
              console.log('SELECTED', selectedText);
              return (
                <Text key={selectedText} style={TestsStyle.resultText}>
                  {selectedText}
                </Text>
              );
            })}
          </View>
        )}
      </TouchableOpacity>
    );
  },
);
