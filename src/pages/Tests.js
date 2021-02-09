import {toJS} from 'mobx';
import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView, ScrollView, Text, TextInput, View} from 'react-native';
import {observer} from 'mobx-react';
import TestItem from '../components/TestItem';
import TestsStore from '../stores/TestsStore';
import TestsStyle from '../style/page/Tests/TestsStyle';

export default observer(() => {
  const allTitle = ['Chlamydia', 'Gonorrhea', 'HIV', 'Syphilis', 'Other'];
  const testTypes = ['Rectal', 'Throad', 'Urine'];
  const [setNote] = useState('');
  const {setTestNote, testSuccess, note, testItems} = TestsStore;
  const setText = (text) => {
    setNote(text);
    setTestNote(text);
  };
  const {tests, changeFlag, tabs} = TestsStore;
  const [current, setCurrent] = useState([]);
  const scrollRef = useRef(null);
  const scrollTo = () => {
    if (tabs === 'Notes') {
      scrollRef.current?.scrollTo({
        y: 100 * 12,
        animated: true,
      });
    } else {
      scrollRef.current?.scrollTo({
        y: 100 * 0,
        animated: true,
      });
    }
  };
  useEffect(() => {
    scrollTo();
  }, [tabs]);
  useEffect(() => {
    const temp = tests?.find((e) => e.id === tests[tests.length - 1].id);
    if (changeFlag) {
      setCurrent(temp);
    }
  }, [tests, changeFlag]);
  return (
    <SafeAreaView style={TestsStyle.safeArea}>
      <ScrollView style={TestsStyle.entryWrapper} ref={scrollRef}>
        {testSuccess && (
          <View style={TestsStyle.main}>
            <View style={TestsStyle.contaier}>
              {allTitle.map((title) => {
                const selectedTitle = current?.test?.find(
                  (e) => e?.title === title,
                );
                console.log('SELECTED', toJS(selectedTitle));

                return (
                  <TestItem
                    title={title}
                    current={selectedTitle}
                    types={testTypes}
                    key={title}
                  />
                );
              })}
            </View>
          </View>
        )}

        {!testSuccess && testItems.length > 0 && (
          <View style={TestsStyle.main}>
            <View style={[TestsStyle.contaier]}>
              {testItems.map((e) => {
                return (
                  <TestItem
                    title={e.title}
                    key={e.title}
                    types={testTypes}
                    result={e.result}
                    sucess={true}
                  />
                );
              })}
            </View>
          </View>
        )}
        {!testSuccess && testItems.length === 0 && (
          <View style={TestsStyle.main}>
            <View style={[TestsStyle.contaier]}>
              <View style={TestsStyle.allClearWrapper}>
                <Text style={TestsStyle.allClearText}>All clear</Text>
              </View>
            </View>
          </View>
        )}
        <View style={TestsStyle.mainNoteWrapper}>
          <Text style={TestsStyle.textNote}>Notes</Text>
          <TextInput
            value={note}
            onChangeText={(text) => testSuccess && setText(text)}
            style={TestsStyle.textInput}
            underlineColorAndroid="transparent"
            placeholder="Add note"
            placeholderTextColor="grey"
            numberOfLines={10}
            multiline={true}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
});
