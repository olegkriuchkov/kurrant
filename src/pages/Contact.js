import {toJS} from 'mobx';
import {observer} from 'mobx-react';
import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import moment from 'moment';
import Image from '../components/Image';
import SucessContactWrapper from '../components/SucessContactWrapper';
import FiendEntryStore from '../stores/FiendEntryStore';
import TestsStyle from '../style/page/Tests/TestsStyle';
import HookupStore from '../stores/HookupStore';
import globalStore from '../stores/globalStore';
import ButtonWithArrow from '../components/ButtonWithArrow';

export default observer(({id}) => {
  const {
    friendEntrySuccess,
    friendEntryNote,
    setFriendNote,
    contact,
    setContacID,
    setContactHookup,
    contactHookup,
    setSelect,
  } = FiendEntryStore;
  const {
    hookups,
    hookupSuccess,
    setChangeFlag,
    setContactHookupFlag,
  } = HookupStore;
  const {globalState} = globalStore;
  useEffect(() => {
    setContacID(id);
    const temp = hookups.filter((e) => e.contactID === id);
    setContactHookup(temp);
  }, [hookupSuccess, globalState.selectedTab]);

  useEffect(() => console.log('Contact', toJS(contact)), []);
  const setText = (text) => {
    setFriendNote(text);
  };

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
                  setChangeFlag(true);
                  setContactHookupFlag(true);
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
              setSelect(true);
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
