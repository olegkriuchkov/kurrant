import React from 'react';
import {SafeAreaView, ScrollView, Text, TextInput, View} from 'react-native';
import TestItem from '../components/TestItem';
import TestsStyle from '../style/page/Tests/TestsStyle';

const Entry = () => {
  const allTitle = ['Makeout', 'Handjob', 'Blowjob', 'Rimjob', 'Anal', 'Other'];
  const types = ['Give', 'Rimjob', 'Give & Receive'];
  const protection = ['Condom', 'No Condom'];
  const substance = ['Alcohol', 'Marijuana', 'Poppres', 'Other'];

  return (
    <SafeAreaView>
      <ScrollView style={TestsStyle.entryWrapper}>
        <View style={TestsStyle.main}>
          <View style={TestsStyle.contaier}>
            {allTitle.map((title) => (

              <TestItem title={title} key={title} types={types} />

            ))}
          </View>
        </View>
        <View style={TestsStyle.main}>
          <View style={{flexDirection: 'column'}}>
            <Text style={TestsStyle.textNote}>Protection</Text>
            <View style={TestsStyle.contaier}>
              {protection.map((title) => (

                <TestItem title={title} key={title} single />
              ))}
            </View>
          </View>
        </View>
        <View style={TestsStyle.main}>
          <View style={{flexDirection: 'column'}}>
            <Text style={TestsStyle.textNote}>Substance</Text>
            <View style={TestsStyle.contaier}>
              {substance.map((title) => (
                <TestItem title={title} key={title} single />

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
