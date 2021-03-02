import {observer} from 'mobx-react';
import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView, ScrollView, Text, TextInput, View} from 'react-native';
import TestItem from '../components/TestItem';
import globalStore from '../stores/globalStore';
import HookupStore from '../stores/HookupStore';
import TestsStore from '../stores/TestsStore';
import TestsStyle from '../style/page/Tests/TestsStyle';

export default observer(({date}) => {
  const allTitle = [
    'Full screening (All)',
    'Chlamydia',
    'Gonorrhea',
    'HIV',
    'Syphilis',
    'Other',
  ];
  const testTypes = ['Rectal', 'Throad', 'Urine'];
  const {
    setTestNote,
    testSuccess,
    note,
    testItems,
    tests,
    setTab,
    result,
    setResult,
    tabs,
    setCurrentID,
    setBeforeResult,
    addTest,
  } = TestsStore;
  const {log, setChangeFlag, changeFlag, changeLog} = HookupStore;

  const {globalState, currentNote} = globalStore;
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
    if (!changeLog) {
      if (tabs === 'Results' && testItems.length === 0) {
        setResult(false);
        setBeforeResult(true);
        setTab('What were you tested for?');
      }
      if (tabs === 'Results' && testItems.length > 0) {
        setResult(true);
      }

      if (tabs === 'What were you tested for?') {
        setResult(false);
      }
    }
    if (changeLog) {
      if (tabs === 'Results') {
        setResult(true);
      }

      if (tabs === 'What were you tested for?') {
        setResult(false);
      }
    }
  };
  useEffect(() => {
    setResult(false);
    scrollTo();
  }, [tabs, globalState.selectedTab]);
  useEffect(() => {
    let temp;
    if (!addTest) {
      temp = tests?.find((e) => e.id === tests[tests.length - 1].id);

      setChangeFlag(true);
    }
    if (log) {
      const a = tests.find((e) => e.date === date);
      temp = a !== undefined ? a : temp;
      setChangeFlag(true);
    }

    if (changeFlag) {
      setCurrent(temp);
    }
  }, [tests, changeFlag, tabs, testSuccess, globalState.selectedTab]);

  return (
    <SafeAreaView style={TestsStyle.safeArea}>
      <ScrollView style={TestsStyle.entryWrapper} ref={scrollRef}>
        {testSuccess && !log && !changeLog && (
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
        {!testSuccess && testItems.length > 0 && !log && !changeLog && (
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
        {log && !changeLog && (
          <View style={TestsStyle.main}>
            <View style={TestsStyle.contaier}>
              {current?.test?.map((e) => {
                setCurrentID(current.id);
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
        {changeLog && (
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

        {!testSuccess && testItems.length === 0 && !log && (
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
            editable={testSuccess}
            value={currentNote.length > 0 ? currentNote : note}
            onChangeText={(text) => testSuccess && setTestNote(text)}
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
