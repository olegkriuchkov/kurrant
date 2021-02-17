import {toJS} from 'mobx';
import {observer} from 'mobx-react';
import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView, ScrollView, Text, TextInput, View} from 'react-native';
import TestItem from '../components/TestItem';
import TestsStore from '../stores/TestsStore';
import TestsStyle from '../style/page/Tests/TestsStyle';

export default observer(() => {
  const allTitle = [
    'Full screening (All)',
    'Chlamydia',
    'Gonorrhea',
    'HIV',
    'Syphilis',
    'Other',
  ];
  const testTypes = ['Rectal', 'Throad', 'Urine'];
  const [setNote] = useState('');
  const {
    setTestNote,
    testSuccess,
    note,
    testItems,
    tests,
    changeFlag,
    setTab,
    result,
    setResult,
    tabs,
    setBeforeResult,
  } = TestsStore;
  const setText = (text) => {
    setNote(text);
    setTestNote(text);
  };
  const [current, setCurrent] = useState([]);
  const scrollRef = useRef(null);
  const scrollTo = () => {
    if (tabs === 'Notes') {
      scrollRef.current?.scrollTo({
        y: 100 * 12,
        animated: true,
      });
      setResult(false);
    }
    if (tabs === 'Results' && testItems.length === 0) {
      setResult(false);
      setBeforeResult(true);
      setTab('What were you tested for?');
    }
    if (tabs === 'Results' && testItems.length > 0) {
      setResult(true);
    }
    console.log('ITEM', toJS(testItems));
    if (tabs === 'What were you tested for?') {
      console.log(tabs);
      setResult(false);
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
  }, [tests, changeFlag, tabs, testSuccess]);

  // TODO отображать ток выбраные элементы в контактах помечать фаворитов в хукапе при сохранении пропадает имя добавить отображение подсказок
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
                return (
                  <TestItem
                    title={title}
                    current={selectedTitle}
                    types={testTypes}
                    key={title}
                    testing={result}
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
                    testing={true}
                    whatIsTest={e.unresult}
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
