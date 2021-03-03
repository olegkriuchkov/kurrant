import {toJS} from 'mobx';
import {observer} from 'mobx-react';
import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import ButtonWithArrow from '../components/ButtonWithArrow';
import Image from '../components/Image';
import SucessContactWrapper from '../components/SucessContactWrapper';
import FiendEntryStore from '../stores/FiendEntryStore';
import globalStore from '../stores/globalStore';
import HookupStore from '../stores/HookupStore';
import TestsStyle from '../style/page/Tests/TestsStyle';

export default observer(({id}) => {
  const [currentName, setCurrentName] = useState('');
  const [note, setNote] = useState('');
  const {
    friendEntrySuccess,
    friendEntryNote,
    setFriendNote,
    contact,
    setContacID,
    setContactHookup,
    contactHookup,
    setSelect,
    setSearchValue,
    contactID,
  } = FiendEntryStore;
  const {
    hookups,
    hookupSuccess,
    setChangeFlag,
    clearForm,
    setContactHookupFlag,
  } = HookupStore;
  const {globalState} = globalStore;
  useEffect(() => {
    setContacID(id);
    const temp = hookups.filter((e) => e.contactID === id);
    setContactHookup(temp, id);
  }, [hookupSuccess, globalState.selectedTab]);
  useEffect(() => {}, [contactHookup.length]);

  useEffect(() => {
    const currentContact = contact?.find((e) => e.friendId === contactID);
    console.log('contact', toJS(contact));

    setCurrentName({
      currentName: currentContact?.name,
      currentLocation: currentContact?.location,
    });
    setNote(currentContact?.friendEntryNote);
  }, [contactID, globalState.selectedTab, contact]);
  return (
    <SafeAreaView style={TestsStyle.safeArea}>
      <ScrollView style={TestsStyle.entryWrapper}>
        <View style={{marginTop: 20}}>
          <SucessContactWrapper id={id} />
        </View>
        <View style={{marginHorizontal: 20}}>
          <Text style={TestsStyle.contactTitle}>Hookups</Text>
          {contactHookup.map((e) => {
            return (
              <ButtonWithArrow
                key={e.date}
                title={`${moment(e.date).format('ddd')}, ${moment(
                  e.date,
                ).format('MMMM D')}`}
                textStyle={TestsStyle.buttonText}
                onPress={() => {
                  setSearchValue(e.name);
                  setChangeFlag(true);
                  setContactHookupFlag(true);
                  clearForm();
                  Actions.push('Entry', {date: e.date});
                }}
                style={TestsStyle.buttonStyle}
                icon={require('../assets/blueArrow.png')}
              />
            );
          })}
          <TouchableOpacity
            style={TestsStyle.addHookups}
            onPress={() => {
              console.log('name', currentName.currentName);
              setSearchValue(currentName.currentName);
              setSelect(true);
              clearForm();
              Actions.Entry();
            }}>
            <Image
              path={require('../assets/whiteplus.png')}
              style={TestsStyle.addHookupsImage}
            />
            <Text style={TestsStyle.addHookupText}>Add new</Text>
          </TouchableOpacity>
        </View>
        <View style={TestsStyle.mainNoteWrapper}>
          <Text style={TestsStyle.textNote}>Notes</Text>
          <TextInput
            editable={friendEntrySuccess}
            onChangeText={(text) => friendEntrySuccess && setFriendNote(text)}
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
