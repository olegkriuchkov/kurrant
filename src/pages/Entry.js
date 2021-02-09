import {observer} from 'mobx-react';
import React, {useEffect, useRef, useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {toJS} from 'mobx';
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
  const {setHookupNote, tabs, hookupSuccess, note} = HookupStore;
  const setText = (text) => {
    setNote(text);
    setHookupNote(text);
  };
  const scrollRef = useRef(null);
  const scrollTo = () => {
    if (tabs === 'Activity') {
      scrollRef.current?.scrollTo({
        y: 100 * 0,
        animated: true,
      });
    }
    if (tabs === 'Protection') {
      scrollRef.current?.scrollTo({
        y: 100 * 5.5,
        animated: true,
      });
    }
    if (tabs === 'Substance') {
      scrollRef.current?.scrollTo({
        y: 100 * 8,
        animated: true,
      });
    }
    if (tabs === 'Notes') {
      scrollRef.current?.scrollTo({
        y: 100 * 12,
        animated: true,
      });
    }
  };
  useEffect(() => {
    scrollTo();
  }, [tabs]);
  console.log('TABS', toJS(tabs));
  return (
    <SafeAreaView style={TestsStyle.safeArea}>
      <ScrollView style={TestsStyle.entryWrapper} ref={scrollRef}>
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
