import {toJS} from 'mobx';
import {observer} from 'mobx-react';
import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import FiendEntryStore from '../../stores/FiendEntryStore';
import globalStore from '../../stores/globalStore';
import ContactsStyle from '../../style/page/ContactsStyle';

const hookups = [
  {
    name: 'Chris',
    time: 1610111040600,
    number: 4,
  },
  {
    name: 'Chad',
    time: 1610568040600,
    number: 1,
  },
  {
    name: 'Zill',
    time: 1610311040600,
    number: 3,
  },
  {
    name: 'Alan Wong',
    time: 1610361040600,
    number: 2,
  },
];

export default observer(() => {
  const [searchValue, setSearchValue] = useState('');
  const {contact, getContacts, setFiendSucess} = FiendEntryStore;
  const {globalState} = globalStore;
  useEffect(() => {
    getContacts();
    console.log(toJS(contact));
  }, [globalState.selectedTab]);
  const getLetters = () => {
    const letters = [];
    for (let i = 65; i <= 90; i++) {
      letters.push(String.fromCharCode(i));
    }

    return letters;
  };
  console.log('------', Actions.currentScene);
  return (
    <ScrollView style={ContactsStyle.scrollViewBlock}>
      <View>
        <Text style={ContactsStyle.mostFrequent}>Most frequent (90 days)</Text>
        {hookups
          .sort((hookup1, hookup2) => hookup1.time < hookup2.time)
          .slice(0, 3)
          .map((hookup, i, hookups) => (
            <Text
              key={i}
              style={[
                ContactsStyle.mostFrequentHookups,
                i < hookups.length - 1 ? ContactsStyle.bottomBorder : null,
              ]}>
              {hookup.name}
            </Text>
          ))}
      </View>
      {!searchValue
        ? getLetters().map((letter, i) => {
            return (
              <View key={i} style={ContactsStyle.letterBlock}>
                <Text style={ContactsStyle.letter}>{letter}</Text>
                {contact.map((contact, i) => {
                  if (contact.name?.charAt(0) === letter) {
                    return (
                      <TouchableOpacity
                        style={ContactsStyle.contact}
                        key={i}
                        onPress={() => {
                          setFiendSucess(false);
                          Actions.push('Contact', {id: contact.friendId});
                        }}>
                        <Text
                          style={{
                            fontSize: 24,
                            color: 727272,
                            fontWeight: 'normal',
                          }}>
                          {contact.name}
                        </Text>
                      </TouchableOpacity>
                    );
                  }
                })}
              </View>
            );
          })
        : contact.map((contact, i) => {
            return contact.name.toLowerCase().startsWith(searchValue) ? (
              <TouchableOpacity
                style={ContactsStyle.contact}
                key={i}
                onPress={() => {}}>
                <Text>{contact.name}</Text>
              </TouchableOpacity>
            ) : null;
          })}
    </ScrollView>
  );
});
