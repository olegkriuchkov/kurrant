import {toJS} from 'mobx';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, TextInput, View} from 'react-native';
import {observer} from 'mobx-react';
import TestItem from '../components/TestItem';
import COLOR from '../constants/COLOR';
import TestsStore from '../stores/TestsStore';
import TestsStyle from '../style/page/Tests/TestsStyle';

export default observer(() => {
  const allTitle = ['Chlamydia', 'Gonorrhea', 'HIV', 'Syphilis', 'Other'];
  const testTypes = ['Rectal', 'Throad', 'Urine'];
  const [note, setNote] = useState('');
  const {setTestNote, TestSuccess, Note, Tests, TestItems} = TestsStore;
  const setText = (text) => {
    setNote(text);
    setTestNote(text);
  };
  console.log(toJS(TestSuccess));
  console.log(toJS(TestItems.length));
  return (
    <SafeAreaView>
      <ScrollView style={TestsStyle.entryWrapper}>
        {TestSuccess && (
          <View style={TestsStyle.main}>
            <View style={TestsStyle.contaier}>
              {allTitle.map((title) => (
                <TestItem title={title} types={testTypes} key={title} />
              ))}
            </View>
          </View>
        )}

        {!TestSuccess && TestItems.length > 0 && (
          <View style={TestsStyle.main}>
            <View style={[TestsStyle.contaier, {minHeight: 280}]}>
              {TestItems.map((e) => {
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
        {!TestSuccess && TestItems.length === 0 && (
          <View style={TestsStyle.main}>
            <View style={[TestsStyle.contaier, {minHeight: 280}]}>
              <View
                style={{
                  width: '45%',
                  minHeight: 165,
                  maxHeight: 165,
                  borderRadius: 20,
                  backgroundColor: COLOR.WHITE,
                  margin: 5,
                  marginTop: 5,
                }}>
                <Text style={{color: COLOR.PINK, margin: 10, fontSize: 18}}>
                  All clear
                </Text>
              </View>
            </View>
          </View>
        )}
        <View style={TestsStyle.mainNoteWrapper}>
          <Text style={TestsStyle.textNote}>Notes</Text>
          <TextInput
            value={Note}
            onChangeText={(text) => TestSuccess && setText(text)}
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
