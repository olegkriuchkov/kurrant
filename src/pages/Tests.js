import React from 'react';
import {Text, SafeAreaView, View, ScrollView, TextInput} from 'react-native';
import TestsStyle from '../style/page/Tests/TestsStyle';
import TestItem from '../components/TestItem';

const Tests = () => {
  const allTitle = ['Chlamydia', 'Gonorrhea', 'HIV', 'Syphilis', 'Other'];
  return (
    <SafeAreaView>
      <ScrollView style={{width: '100%', height: '100%'}}>
        <View style={TestsStyle.main}>
          <View style={TestsStyle.contaier}>
            {allTitle.map((title) => (
              <TestItem title={title} />
            ))}
          </View>
        </View>
        <View style={TestsStyle.mainNoteWrapper}>
          <View style={TestsStyle.noteWrapper} />
          <Text style={TestsStyle.textNote}>Notes</Text>
          <TextInput
            style={TestsStyle.textInput}
            underlineColorAndroid="transparent"
            placeholder="Type something"
            placeholderTextColor="grey"
            numberOfLines={10}
            multiline={true}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Tests;
