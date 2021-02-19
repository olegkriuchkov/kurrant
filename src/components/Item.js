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
  }) => {
    const {fullscreening, setFullScreening, setUnFulScreening} = TestsStore;
    return (
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
            setFullScreening(!fullscreening);
            setUnFulScreening(true);
          }
          if (title !== 'Full screening (All)') {
            setUnFulScreening(false);
          }
        }}
        style={TestsStyle.mainItem}>
        {!flag && !confirm && (
          <Text style={TestsStyle.titleStyle}>
            {testing && title === 'Full screening (All)' ? 'All Clear' : title}
          </Text>
        )}
        {flag &&
          types.map((type, index) => (
            <ButtonItem
              index={index}
              key={type}
              type={type}
              onPress={() => {
                select(type);
              }}
              title={title}
              testing={testing}
              selected={testing ? selected : temp}
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
            <Text style={TestsStyle.resultTitleText}>
              {testing && title === 'Full screening (All)'
                ? 'All Clear'
                : title}
            </Text>
            {title !== 'Full screening (All)' &&
              (whatIsTest || temp)?.map((selectedText, i) => {
                const diff = temp.includes(
                  selected.find((e) => e === selectedText),
                )
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
    );
  },
);
