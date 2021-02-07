import {toJS} from 'mobx';
import {observer} from 'mobx-react';
import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
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
  const {contact, getContacts, setFiendSucess, filters} = FiendEntryStore;
  const [filtered, setFiltered] = useState(null);
  const {globalState} = globalStore;
  useEffect(() => {
    getContacts();
    console.log(toJS(contact));
    if (filters.length > 0) {
      const contactFilter = contact.filter((e) => {
        const temp = e.contact.filter((e) => {
          if (filters.includes(e.title)) {
            return e;
          }
        });
        return temp.length > 0;
      });
      setFiltered(contactFilter);
    } else {
      setFiltered([]);
    }
  }, [globalState.selectedTab, filters.length]);
  const getLetters = () => {
    const letters = [];
    for (let i = 65; i <= 90; i++) {
      letters.push(String.fromCharCode(i));
    }

    return letters;
  };

  const onPressContact = (id) => {
    setFiendSucess(false);
    Actions.push('Contact', {id});
  };

  return (
    <ScrollView style={ContactsStyle.scrollViewBlock}>
      {/* <SearchBar
        placeholder="Search"
        onChangeText={(value)=> setSearchValue(value.toLowerCase())}
        value={searchValue}
        lightTheme={true}
        inputStyle={ContactsStyle.searchField}
        containerStyle={{backgroundColor: 'transparent', padding: 10, }}
        inputContainerStyle={{backgroundColor: 'white', borderRadius: 15, borderWidth: 2, borderColor: 'lightgrey'}}
        searchIcon={
          <Icon
            name='sc-telegram'
            type='evilicon'
            color='#517fa4'
          />
        }
      /> */}
      <View style={ContactsStyle.mostFrequentContainer}>
        <View style={ContactsStyle.contentContainer}>
          <View style={ContactsStyle.titleContainer}>
            <Text style={ContactsStyle.mostFrequent}>
              Most frequent (90 days)
            </Text>
          </View>
          {hookups.length &&
            hookups
              .sort((hookup1, hookup2) => hookup1.time < hookup2.time)
              .slice(0, 3)
              .map((hookup, i) => (
                <View
                  style={[
                    ContactsStyle.contactContainer,
                    i > 0 ? ContactsStyle.topBorder : null,
                  ]}
                  key={`${hookup.name}-${i}`}>
                  <Text style={ContactsStyle.mostFrequentHookups}>
                    {hookup.name}
                  </Text>
                </View>
              ))}
        </View>
      </View>
      {!searchValue
        ? getLetters().map((letter, i) => {
            let letterContacts;
            if (filtered?.length > 0) {
              letterContacts = filtered.filter(
                (contact) => contact.name?.charAt(0) === letter,
              );
            } else {
              letterContacts = contact.filter(
                (contact) => contact.name?.charAt(0) === letter,
              );
            }
            return (
              <View key={i} style={ContactsStyle.letterBlock}>
                <View
                  style={[
                    ContactsStyle.letterContainer,
                    letterContacts.length === 0 && ContactsStyle.bottomBorder,
                  ]}>
                  <Text style={ContactsStyle.letter}>{letter}</Text>
                </View>
                <View style={ContactsStyle.contactsBlock}>
                  {letterContacts.map((contact, i) => {
                    return (
                      <TouchableOpacity
                        style={[
                          ContactsStyle.contactContainer,
                          i > 0 ? ContactsStyle.topBorder : null,
                        ]}
                        key={i}
                        onPress={() => onPressContact(contact.friendId)}>
                        <Text style={ContactsStyle.contact}>
                          {contact.name}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
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
