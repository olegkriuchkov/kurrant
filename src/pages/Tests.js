import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, TextInput, View} from 'react-native';
import {observer} from 'mobx-react';
import TestItem from '../components/TestItem';
import TestsStore from '../stores/TestsStore';
import TestsStyle from '../style/page/Tests/TestsStyle';

const Tests = observer(() => {
  const allTitle = ['Chlamydia', 'Gonorrhea', 'HIV', 'Syphilis', 'Other'];
  const testTypes = ['Rectal', 'Throad', 'Urine'];
  const [note, setNote] = useState('');
  const {setTestNote, TestSuccess, Note} = TestsStore;
  const setText = (text) => {
    setNote(text);
    setTestNote(text);
  };
  return (
    <SafeAreaView>
      <ScrollView style={TestsStyle.entryWrapper}>
        <View style={TestsStyle.main}>
          <View style={TestsStyle.contaier}>
            {allTitle.map((title) => (
              <TestItem title={title} types={testTypes} key={title} />
            ))}
          </View>
        </View>
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

export default Tests;
