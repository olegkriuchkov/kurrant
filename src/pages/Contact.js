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
import COLOR from '../constants/COLOR';
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
  } = FiendEntryStore;
  const {hookups, hookupSuccess} = HookupStore;
  const {globalState} = globalStore;

  useEffect(() => {
    setContacID(id);
    const temp = hookups.filter((e) => e.contactID === id);
    console.log('hookup', toJS(hookups));
    console.log('temp', toJS(temp));
    console.log(id);
    setContactHookup(temp);
  }, [hookupSuccess, globalState.selectedTab]);
  useEffect(() => console.log('Contact', toJS(contact)), []);
  const setText = (text) => {
    setFriendNote(text);
  };
  return (
    <SafeAreaView style={TestsStyle.safeArea}>
      <ScrollView style={TestsStyle.entryWrapper}>
        <SucessContactWrapper id={id} />
        <View style={{marginHorizontal: 20}}>
          <Text
            style={{
              fontSize: 20,
              paddingBottom: 20,
              paddingTop: 5,
              borderBottomColor: COLOR.TOPLINE,
              borderBottomWidth: 1,
              marginTop: 25,
              borderTopColor: COLOR.TOPLINE,
              borderTopWidth: 1,
              color: COLOR.NAVBARBORDER,
            }}>
            Hookups
          </Text>
          {contactHookup.map((e) => {
            return (
              <ButtonWithArrow
                title={`${moment(e.date).format('ddd')}, ${moment(
                  e.date,
                ).format('MMMM D')}`}
                textStyle={{color: COLOR.PINK, fontSize: 20}}
                style={{
                  marginVertical: 5,
                  paddingBottom: 10,
                  borderBottomColor: COLOR.TOPLINE,
                  borderBottomWidth: 1,
                }}
                icon={require('../assets/blueArrow.png')}
              />
            );
          })}
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 40,
              marginTop: 10,
            }}
            onPress={() => Actions.Entry()}>
            <Image
              path={require('../assets/whiteplus.png')}
              style={{width: 20, height: 20, marginRight: 10}}
            />
            <Text style={{fontSize: 20, color: COLOR.WHITE}}>Add new</Text>
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
