import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {observer} from 'mobx-react';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import Image from './Image';
import TestsStyle from '../style/page/Tests/TestsStyle';
import ButtonItem from './ButtonItem';
import HookupStore from '../stores/HookupStore';

export default observer(
  ({title, types, single = false, result = [], sucess = false, colections}) => {
    const {setHookupItem, hookupSuccess, hookupItem} = HookupStore;
    const [flag, setFlag] = useState(false);
    const [selected, setSelected] = useState(result);
    const [singleFlag, setSingleFlag] = useState(false);
    const [confirm, setConfirm] = useState(sucess);
    const currentItem = hookupItem.find((e) => e.title === title);

    const containerStyle = single
      ? [TestsStyle.confirmButton, {top: 90}]
      : TestsStyle.confirmButton;

    const singleTextStyle = singleFlag
      ? TestsStyle.titleStyleSingle
      : TestsStyle.titleStyle;

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
    }, [hookupSuccess]);
    const setHookup = (result, singleItem = false) => {
      setHookupItem({
        title,
        result,
        id: currentItem ? currentItem.id : uuidv4(),
        single: singleItem,
        colection: colections,
      });
    };
    const toggleSingleSelect = () => {
      if (hookupSuccess) {
        setFlag(true);
        if (single) {
          setHookup([title], true);
          setSingleFlag(!singleFlag);
        }
      }
    };
    const testSuccess = () => {
      if (hookupSuccess) {
        if (selected.length > 0) {
          setFlag(false);
          setConfirm(true);
          setHookup(selected);
        } else {
          setFlag(false);
        }
        if (selected.length === 0 && !single) {
          setConfirm(false);
        }
      }
    };

    return (
      <TouchableOpacity
        onPress={() => {
          toggleSingleSelect();
        }}
        style={singleFlag ? TestsStyle.singleMainItem : TestsStyle.mainItem}>
        {(single ? true : !flag) && !confirm && (
          <Text style={singleTextStyle}>{title}</Text>
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
            <Image
              path={require('../assets/confirmButton.png')}
              style={TestsStyle.confirmImage}
              containerStyle={containerStyle}
              onPress={() => testSuccess()}
            />
          </View>
        )}
        {confirm && !flag && (
          <View style={TestsStyle.resultTitle}>
            <Text style={TestsStyle.resultTitleText}>{title}</Text>
            {!single &&
              selected.map((selectedText) => (
                <Text key={selectedText} style={TestsStyle.resultText}>
                  {selectedText}
                </Text>
              ))}
          </View>
        )}
      </TouchableOpacity>
    );
  },
);
