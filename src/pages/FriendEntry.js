import {observer} from 'mobx-react';
import React from 'react';
import {SafeAreaView, ScrollView, Text, TextInput, View} from 'react-native';
import FriendWrapper from '../components/FriendWrapper';
import FiendEntryStore from '../stores/FiendEntryStore';
import TestsStyle from '../style/page/Tests/TestsStyle';

export default observer(() => {
  const status = ['Negative', 'Negative, on PrEP', 'Positive', 'Positive, U'];
  const position = ['Bottom', 'Top', 'Versatile'];
  const {
    friendEntrySuccess,
    friendEntryNote,
    setFriendNote,
    locationFlag,
  } = FiendEntryStore;
  const setText = (text) => {
    setFriendNote(text);
  };
  return (
    <>
      {!locationFlag && (
        <SafeAreaView style={TestsStyle.safeArea}>
          <ScrollView style={TestsStyle.entryWrapper}>
            <View>
              <FriendWrapper withOutText array={status} single={true} />
              <FriendWrapper title="Position" array={position} single={true} />
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
      )}
    </>
  );
});
