import {observer} from 'mobx-react';
import React, {useEffect, useRef} from 'react';
import {SafeAreaView, ScrollView, Text, TextInput, View} from 'react-native';
import FriendWrapper from '../components/FriendWrapper';
import FiendEntryStore from '../stores/FiendEntryStore';
import HookupStore from '../stores/HookupStore';
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
  const {tabs} = HookupStore;

  const scrollRef = useRef(null);

  const scrollTo = () => {
    if (tabs === 'Status') {
      scrollRef.current?.scrollTo({
        y: 100 * 0,
        animated: true,
      });
    }
    if (tabs === 'Position') {
      scrollRef.current?.scrollTo({
        y: 100 * 3.7,
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
  return (
    <>
      {!locationFlag && (
        <SafeAreaView style={TestsStyle.safeArea}>
          <ScrollView style={TestsStyle.entryWrapper} ref={scrollRef}>
            <View>
              <FriendWrapper withOutText array={status} single={true} />
              <FriendWrapper title="Position" array={position} single={true} />
            </View>

            <View style={TestsStyle.mainNoteWrapper}>
              <Text style={TestsStyle.textNote}>Notes</Text>
              <TextInput
                editable={friendEntrySuccess}
                onChangeText={(text) =>
                  friendEntrySuccess && setFriendNote(text)
                }
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
