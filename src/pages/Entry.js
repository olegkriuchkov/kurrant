import {observer} from 'mobx-react';
import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, TextInput, View} from 'react-native';
import HookupWrapepr from '../components/HookupWrapepr';
import SucessHookupWrapper from '../components/SucessHookupWrapper';
import TestsStyle from '../style/page/Tests/TestsStyle';
import HookupStore from '../stores/HookupStore';

export default observer(() => {
  const allTitle = ['Makeout', 'Handjob', 'Blowjob', 'Rimjob', 'Anal', 'Other'];
  const types = ['Give', 'Receive', 'Give & Receive'];
  const protection = ['Condom', 'No Condom'];
  const substance = ['Alcohol', 'Marijuana', 'Poppres', 'Other '];
  const [notes, setNote] = useState('');
  const {setHookupNote, hookupSuccess, note} = HookupStore;
  const setText = (text) => {
    setNote(text);
    setHookupNote(text);
  };
  return (
    <SafeAreaView style={TestsStyle.safeArea}>
      <ScrollView style={TestsStyle.entryWrapper}>
        {hookupSuccess && (
          <View>
            <HookupWrapepr
              array={allTitle}
              types={types}
              single={false}
              withOutText={true}
            />
            <HookupWrapepr
              title="Protection"
              array={protection}
              single={true}
            />
            <HookupWrapepr title="Substance" array={substance} single={true} />
          </View>
        )}
        {!hookupSuccess && <SucessHookupWrapper />}

        <View style={TestsStyle.mainNoteWrapper}>
          <Text style={TestsStyle.textNote}>Notes</Text>
          <TextInput
            onChangeText={(text) => hookupSuccess && setText(text)}
            value={note}
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
