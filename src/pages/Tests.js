import React, {useState} from 'react';
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

  return (
    <SafeAreaView style={TestsStyle.safeArea}>
      <ScrollView style={TestsStyle.entryWrapper}>
        {testSuccess && (
          <View style={TestsStyle.main}>
            <View style={TestsStyle.contaier}>
              {allTitle.map((title) => (
                <TestItem title={title} types={testTypes} key={title} />
              ))}
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
