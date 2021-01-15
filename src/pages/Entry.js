import React from 'react';
import {Text, SafeAreaView, View, ScrollView, TextInput} from 'react-native';
import TestsStyle from '../style/page/Tests/TestsStyle';
import TestItem from '../components/TestItem';

const Entry = () => {
  const allTitle = ['Makeout', 'Handjob', 'Blowjob', 'Rimjob', 'Anal', 'Other'];
  const protection = ['Condom', 'No Condom'];
  const types = ['Give', 'Rimjob', 'Give & Receive'];

  return (
    <SafeAreaView>
      <ScrollView style={{width: '100%', height: '100%'}}>
        <View style={TestsStyle.main}>
          <View style={TestsStyle.contaier}>
            {allTitle.map((title) => (
              <TestItem title={title} types={types} />
            ))}
          </View>
        </View>
        <View style={TestsStyle.main}>
          <View style={{flexDirection: 'column'}}>
            <Text style={TestsStyle.textNote}>Protection</Text>
            <View style={TestsStyle.contaier}>
              {protection.map((title) => (
                <TestItem title={title} types={protection} />
              ))}
            </View>
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

export default Entry;
