import {toJS} from 'mobx';
import {observer} from 'mobx-react';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, TextInput, View} from 'react-native';
import FriendWrapper from '../components/FriendWrapper';
import FiendEntryStore from '../stores/FiendEntryStore';
import TestsStyle from '../style/page/Tests/TestsStyle';

export default observer(() => {
  const status = ['Negative', 'Negative, on PrEP', 'Positive', 'Positive, U'];
  const position = ['Bottom', 'Top', 'Versatile'];
  const [note, setNote] = useState('');
  const {
    friendEntrySuccess,
    friendEntryNote,
    setFriendNote,
    contactItem,
    contactID,
    contact,
  } = FiendEntryStore;
  useEffect(() => {
    console.log('Contact', toJS(contact));
    console.log('Contact', toJS(contactID));
  }, []);
  const setText = (text) => {
    setNote(text);
    setFriendNote(text);
  };
  return (
    <SafeAreaView style={TestsStyle.safeArea}>
      <ScrollView style={TestsStyle.entryWrapper}>
        <View>
          <FriendWrapper withOutText array={status} single={true} />
          <FriendWrapper title="Position" array={position} single={true} />
        </View>

        {/* {!friendEntrySuccess && contactItem.length > 0 && (
          <View style={TestsStyle.main}>
            <View style={[TestsStyle.contaier]}>
              {contactItem.map((e) => {
                console.log('item', toJS(contactItem));
                return (
                  <FriendItem
                    title={e.title}
                    key={e.title}
                    sucess={true}
                    single={true}
                  />
                );
              })}
            </View>
          </View>
        )} */}
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
