import React, {useState} from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';
import HookupWrapepr from '../components/HookupWrapepr';
import HookupStore from '../stores/HookupStore';
import TestsStyle from '../style/page/Tests/TestsStyle';

const AddFriendEntry = () => {
  const status = ['Negative', 'Negative, on PrEP', 'Positive', 'Positive, U'];
  const position = ['Bottom', 'Top', 'Versatile'];
  const [note, setNote] = useState('');
  const {friendEntrySuccess, friendEntryNote, setFriendNote} = HookupStore;
  const setText = (text) => {
    setNote(text);
    setFriendNote(text);
  };
  return (
    <ScrollView style={TestsStyle.entryWrapper}>
      <View>
        <HookupWrapepr withOutText array={status} single={true} />
        <HookupWrapepr title="Protection" array={position} single={true} />
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
  );
};
export default AddFriendEntry;
