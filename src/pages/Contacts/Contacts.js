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
// TODO в логах текущий день изменить стили,сделать отображение последнего поиска по контактам,добавить возможность просмотра хукапа из контакта
export default observer(() => {
  const {
    contact,
    getContacts,
    setFiendSucess,
    filters,
    searchValue,
    isSearch,
  } = FiendEntryStore;
  const [filtered, setFiltered] = useState(null);
  const {globalState} = globalStore;
  useEffect(() => {
    getContacts();
    console.log(toJS(contact));
    if (filters.length > 0) {
      const contactFilter = contact.filter((e) => {
        let coutn = 0;
        const temp = e.contact.filter((e) => {
          if (filters.includes(e.title)) {
            coutn++;
            return e;
          }
          console.log(coutn);
        });
        return coutn === filters.length && temp;
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
    <ScrollView style={!isSearch ? {} : ContactsStyle.scrollViewBlock}>
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
          {!isSearch && (
            <View style={ContactsStyle.titleContainer}>
              <Text style={ContactsStyle.mostFrequent}>
                Most frequent (90 days)
              </Text>
            </View>
          )}
          {!!hookups.length &&
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
      {!isSearch ? (
        getLetters().map((letter, i) => {
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
                      <Text style={ContactsStyle.contact}>{contact.name}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          );
        })
      ) : (
        <View style={ContactsStyle.contactsBlock}>
          {contact.map((contact, i) => {
            return contact.name.toLowerCase().startsWith(searchValue) ? (
              <TouchableOpacity
                key={i}
                onPress={() => onPressContact(contact.friendId)}
                style={[
                  ContactsStyle.contactContainer,
                  i > 0 ? ContactsStyle.topBorder : null,
                ]}>
                <Text style={ContactsStyle.contact}>{contact.name}</Text>
              </TouchableOpacity>
            ) : null;
          })}
        </View>
      )}
    </ScrollView>
  );
});
