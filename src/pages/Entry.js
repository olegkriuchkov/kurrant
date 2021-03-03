import {observer} from 'mobx-react';
import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView, ScrollView, Text, TextInput, View} from 'react-native';
import HookupWrapepr from '../components/HookupWrapepr';
import SucessHookupWrapper from '../components/SucessHookupWrapper';
import COLOR from '../constants/COLOR';
import FiendEntryStore from '../stores/FiendEntryStore';
import globalStore from '../stores/globalStore';
import HookupStore from '../stores/HookupStore';
import TestsStyle from '../style/page/Tests/TestsStyle';
import Contacts from './Contacts/Contacts';

export default observer(({date}) => {
  const allTitle = ['Makeout', 'Handjob', 'Blowjob', 'Rimjob', 'Anal', 'Other'];
  const types = ['Give', 'Receive', 'Give & Receive'];
  const protection = ['Condom', 'No Condom'];
  const substance = ['Alcohol', 'Marijuana', 'Poppres', 'Other '];
  const [temp, setTemp] = useState('');
  const {
    setHookupNote,
    tabs,
    hookupSuccess,
    note,
    hookups,
    contactHookupFlag,
  } = HookupStore;
  const {currentNote, setCurrentNote} = globalStore;
  const setText = (text) => {
    setHookupNote(text);
  };
  const {isSearch, contactID} = FiendEntryStore;
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
    const hookup = hookups?.find(
      (e) => e.contactID === contactID && e.date === date,
    );
    if (!hookup) return;
    setCurrentNote(hookup.note);
  }, []);
  useEffect(() => {
    scrollTo();
  }, [tabs]);
  return (
    <SafeAreaView
      style={
        isSearch
          ? [TestsStyle.safeArea, {backgroundColor: COLOR.LIGHT_GREY}]
          : TestsStyle.safeArea
      }>
      {!isSearch && (
        <ScrollView style={TestsStyle.entryWrapper} ref={scrollRef}>
          {hookupSuccess && (
            <View>
              <HookupWrapepr
                array={allTitle}
                date={date}
                types={types}
                hookup
                single={false}
                withOutText={true}
              />
              <HookupWrapepr
                date={date}
                title="Protection"
                array={protection}
                hookup
                single={true}
              />
              <HookupWrapepr
                title="Substance"
                date={date}
                array={substance}
                hookup
                single={true}
              />
            </View>
          )}
          {!hookupSuccess && <SucessHookupWrapper date={date} hook />}

          <View style={TestsStyle.mainNoteWrapper}>
            <Text style={TestsStyle.textNote}>Notes</Text>
            <TextInput
              onChangeText={(text) => hookupSuccess && setText(text)}
              value={currentNote?.length > 0 ? currentNote : note}
              editable={hookupSuccess && !contactHookupFlag}
              style={TestsStyle.textInput}
              underlineColorAndroid="transparent"
              placeholder="Add note"
              placeholderTextColor="grey"
              numberOfLines={10}
              multiline={true}
            />
          </View>
        </ScrollView>
      )}
      {isSearch && <Contacts hookup />}
    </SafeAreaView>
  );
});
