import React from 'react';
import {SafeAreaView, ScrollView, Text, TextInput, View} from 'react-native';
import TestItem from '../components/TestItem';
import TestsStyle from '../style/page/Tests/TestsStyle';

const Tests = () => {
  const allTitle = ['Chlamydia', 'Gonorrhea', 'HIV', 'Syphilis', 'Other'];
  const testTypes = ['Rectal', 'Throad', 'Urine'];

  return (
    <SafeAreaView>
      <ScrollView style={TestsStyle.entryWrapper}>
        <View style={TestsStyle.main}>
          <View style={TestsStyle.contaier}>
            {allTitle.map((title) => (
              <TestItem title={title} types={testTypes} />
            ))}
          </View>
        </View>
        <View style={TestsStyle.mainNoteWrapper}>
          <Text style={TestsStyle.textNote}>Notes</Text>
          <TextInput
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
};

export default Tests;
