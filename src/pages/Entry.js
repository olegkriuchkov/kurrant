import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, TextInput, View} from 'react-native';
import EntryItem from '../components/EntryItem';
import TestsStyle from '../style/page/Tests/TestsStyle';
import HookupStore from '../stores/HookupStore';

const Entry = () => {
  const allTitle = ['Makeout', 'Handjob', 'Blowjob', 'Rimjob', 'Anal', 'Other'];
  const types = ['Give', 'Receive', 'Give & Receive'];
  const protection = ['Condom', 'No Condom'];
  const substance = ['Alcohol', 'Marijuana', 'Poppres', 'Other'];
  const [note, setNote] = useState('');
  const {setHookupNote, HookupSuccess, Note} = HookupStore;
  const setText = (text) => {
    setNote(text);
    setHookupNote(text);
  };
  return (
    <SafeAreaView>
      <ScrollView style={TestsStyle.entryWrapper}>
        <View style={TestsStyle.main}>
          <View style={TestsStyle.contaier}>
            {allTitle.map((title) => (
              <EntryItem title={title} key={title} types={types} hookup />
            ))}
          </View>
        </View>
        <View style={TestsStyle.main}>
          <View style={{flexDirection: 'column'}}>
            <Text style={TestsStyle.textNote}>Protection</Text>
            <View style={TestsStyle.contaier}>
              {protection.map((title) => (
                <EntryItem title={title} key={title} single hookup />
              ))}
            </View>
          </View>
        </View>

        <View style={TestsStyle.main}>
          <View style={{flexDirection: 'column'}}>
            <Text style={TestsStyle.textNote}>Substance</Text>
            <View style={TestsStyle.contaier}>
              {substance.map((title) => (
                <EntryItem
                  title={title}
                  key={title}
                  single
                  hookup /* for set hookups item to hookups store */
                />
              ))}
            </View>
          </View>
        </View>

        <View style={TestsStyle.mainNoteWrapper}>
          <Text style={TestsStyle.textNote}>Notes</Text>
          <TextInput
            onChangeText={(text) => HookupSuccess && setText(text)}
            value={Note}
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
