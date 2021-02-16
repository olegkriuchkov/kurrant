import {observer} from 'mobx-react';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import COLOR from '../constants/COLOR';
import TestsStore from '../stores/TestsStore';
import TestsStyle from '../style/page/Tests/TestsStyle';
import ButtonItem from './ButtonItem';
import Image from './Image';

export default observer(
  ({
    testing,
    toggleSingleSelect,
    temp,
    title,
    setFlag,
    setConfirm,
    confirm,
    flag,
    types,
    select,
    selected,
    testsSuccess,
    whatIsTest,
  }) => (
    <TouchableOpacity
      onPress={() => {
        if (!testing) {
          toggleSingleSelect();
        }
        if (testing && temp.length > 0) {
          toggleSingleSelect();
        }
        if (title === 'Full screening (All)') {
          setFlag(false);
          setConfirm(!confirm);
        }
      }}
      style={TestsStyle.mainItem}>
      {!flag && !confirm && <Text style={TestsStyle.titleStyle}>{title}</Text>}
      {flag &&
        title !== 'Full screening (All)' &&
        types.map((type, index) => (
          <ButtonItem
            index={index}
            key={type}
            type={type}
            onPress={() => {
              select(type);
            }}
            testing={testing}
            selected={testing ? selected : temp}
          />
        ))}

      {flag && (
        <View style={{alignItems: 'center'}}>
          <Image
            path={require('../assets/confirmButton.png')}
            style={TestsStyle.confirmImage}
            containerStyle={[TestsStore.confirmButton, {bottom: 30, left: 80}]}
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
          {(whatIsTest || temp).map((selectedText, i) => {
            const diff = temp.includes(selected.find((e) => e === selectedText))
              ? '(+)'
              : '(-)';
            return (
              <>
                {testing && (
                  <Text key={selectedText} style={TestsStyle.resultText}>
                    {`${diff} ${diff === '(-)' ? temp[i] : selectedText}`}
                  </Text>
                )}
                {!testing && (
                  <Text key={selectedText} style={TestsStyle.resultText}>
                    {selectedText}
                  </Text>
                )}
              </>
            );
          })}
        </View>
      )}
    </TouchableOpacity>
  ),
);
