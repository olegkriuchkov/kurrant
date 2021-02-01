import {toJS} from 'mobx';
import {observer} from 'mobx-react';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CompleteEntry from '../components/CompleteEntry';
import FriendWrapper from '../components/FriendWrapper';
import Image from '../components/Image';
import SucessContactWrapper from '../components/SucessContactWrapper';
import FiendEntryStore from '../stores/FiendEntryStore';
import TestsStyle from '../style/page/Tests/TestsStyle';

export default observer(({id}) => {
  const {
    friendEntrySuccess,
    friendEntryNote,
    setFriendNote,
    contact,
    setContacID,
  } = FiendEntryStore;

  useEffect(() => {
    setContacID(id);
  }, [friendEntrySuccess]);

  useEffect(() => console.log('Contact', toJS(contact)), []);
  const setText = (text) => {
    setFriendNote(text);
  };
  return (
    <SafeAreaView style={TestsStyle.safeArea}>
      <ScrollView style={TestsStyle.entryWrapper}>
        <SucessContactWrapper id={id} />
        <View>
          <Text>Hookups</Text>
          <TouchableOpacity>
            <Image
              path={require('../assets/whiteplus.png')}
              style={{width: 30, height: 30}}
            />
            <Text>Add new</Text>
          </TouchableOpacity>
        </View>
        <View style={TestsStyle.mainNoteWrapper}>
          <Text style={TestsStyle.textNote}>Notes</Text>
          <TextInput
            onChangeText={(text) => friendEntrySuccess && setText(text)}
            value={friendEntryNote}
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
