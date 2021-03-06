import {observer} from 'mobx-react';
import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Image from '../../components/Image';

import FiendEntryStore from '../../stores/FiendEntryStore';
import globalStore from '../../stores/globalStore';
import HookupStore from '../../stores/HookupStore';
import ContactsStyle from '../../style/page/ContactsStyle';

export default observer(({hookup}) => {
  const {
    contact,
    getContacts,
    deleteHistoryItem,
    setFiendSucess,
    filters,
    searchValue,
    searchHistory,
    isSearch,
    clearSearchHistory,
    setSearchValue,
    setContacID,
    countryFilter,
    favoriteFlag,
    setIsSearch,
  } = FiendEntryStore;
  const {setName} = HookupStore;
  const [filtered, setFiltered] = useState(null);
  const {globalState} = globalStore;
  const [contacts, setContacts] = useState(contact);
  const [hookups, setHookups] = useState();
  const getFavorite = () => {
    const temp = contacts.filter((e) => e.favorite);
    setHookups(temp);
    if (countryFilter !== null) {
      setHookups(temp.filter((e) => e.location === countryFilter));
    }
  };
  useEffect(() => {
    getFavorite();
  }, [contacts, globalState.selectedTab, favoriteFlag]);
  useEffect(() => {
    setContacts(contact);
    if (countryFilter !== null) {
      console.log('TUUUUUt');
      setContacts(contact.filter((el) => el.location === countryFilter));
    }
  }, [contact, countryFilter]);
  useEffect(() => {
    getContacts();
    if (filters.length > 0) {
      const arr = favoriteFlag ? hookups : contacts;
      const contactFilter = arr?.filter((e) => {
        let coutn = 0;
        const temp = e.contact.filter((e) => {
          if (filters.includes(e.title)) {
            coutn++;
            return e;
          }
        });
        return coutn === filters.length && temp;
      });
      setFiltered(contactFilter);
    } else {
      setFiltered([]);
    }
  }, [globalState.selectedTab, filters.length, favoriteFlag, countryFilter]);

  const getLetters = () => {
    const letters = [];
    for (let i = 65; i <= 90; i++) {
      letters.push(String.fromCharCode(i));
    }

    return letters;
  };

  const onPressContact = (id, name) => {
    if (hookup) {
      setSearchValue(name);
      setContacID(id);
      setIsSearch(false);
    } else {
      setFiendSucess(false);
      Actions.push('Contact', {id});
    }
  };

  return (
    <ScrollView style={!isSearch ? {} : ContactsStyle.scrollViewBlock}>
      {!favoriteFlag && (
        <View style={ContactsStyle.mostFrequentContainer}>
          <View style={ContactsStyle.contentContainer}>
            {!isSearch && !countryFilter && (
              <View style={ContactsStyle.titleContainer}>
                <Text style={ContactsStyle.mostFrequent}>
                  Most frequent (90 days)
                </Text>
              </View>
            )}
            {!!hookups?.length &&
              !isSearch &&
              hookups
                .sort((hookup1, hookup2) => hookup1.time < hookup2.time)
                .slice(0, 3)
                .map((hookup, i) => (
                  <TouchableOpacity
                    onPress={() => onPressContact(hookup.friendId, hookup.name)}
                    style={[
                      ContactsStyle.contactContainer,
                      i > 0 ? ContactsStyle.topBorder : null,
                    ]}
                    key={`${hookup.name}-${i}`}>
                    <Text style={ContactsStyle.mostFrequentHookups}>
                      {hookup.name}
                    </Text>
                  </TouchableOpacity>
                ))}
          </View>
        </View>
      )}
      {!favoriteFlag && !isSearch ? (
        getLetters().map((letter, i) => {
          let letterContacts;
          if (filtered?.length > 0) {
            letterContacts = filtered.filter(
              (contact) => contact.name?.charAt(0) === letter,
            );
          } else {
            letterContacts = contacts.filter(
              (contact) => contact.name?.charAt(0) === letter,
            );
          }
          return (
            <View key={i} style={ContactsStyle.letterBlock}>
              <View
                style={[
                  ContactsStyle.letterContainer,
                  letterContacts?.length === 0 && ContactsStyle.bottomBorder,
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
                      {contact.favorite && (
                        <Image
                          path={require('../../assets/favorite.png')}
                          style={{width: 15, height: 15}}
                        />
                      )}
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          );
        })
      ) : searchValue?.length > 0 ? (
        <View style={ContactsStyle.contactsBlock}>
          {contacts.map((contact, i) => {
            return contact.name.toLowerCase().startsWith(searchValue) ? (
              <TouchableOpacity
                key={i}
                onPress={() => onPressContact(contact.friendId, contact.name)}
                style={[
                  ContactsStyle.contactContainer,
                  i > 0 ? ContactsStyle.topBorder : null,
                ]}>
                <Text style={ContactsStyle.contact}>{contact.name}</Text>
              </TouchableOpacity>
            ) : null;
          })}
        </View>
      ) : (
        <View style={ContactsStyle.contactsBlock}>
          {isSearch && (
            <TouchableOpacity
              onPress={() => {
                setFiendSucess(true);
                setContacID(null);
                Actions.AddFriendEntry();
              }}>
              <Text>Add new Contact</Text>
            </TouchableOpacity>
          )}
          {searchHistory.map((contact, i) => {
            const name =
              contact[0].toUpperCase() + contact.slice(1, contact.length);
            return (
              <TouchableOpacity
                key={i}
                onPress={() => setSearchValue(name)}
                style={[
                  ContactsStyle.contactContainer,
                  {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  },
                  i > 0 ? ContactsStyle.topBorder : null,
                ]}>
                <Text style={ContactsStyle.contact}>{name}</Text>
                <Image
                  path={require('../../assets/deleteHistoryItem.png')}
                  style={{width: 30, height: 30}}
                  onPress={() => {
                    deleteHistoryItem(contact);
                  }}
                />
              </TouchableOpacity>
            );
          })}

          {searchHistory.length > 0 && (
            <TouchableOpacity
              style={ContactsStyle.clearSearchButton}
              onPress={() => {
                clearSearchHistory();
              }}>
              <Text style={ContactsStyle.clearButtonText}>
                Clear recent searches
              </Text>
            </TouchableOpacity>
          )}
        </View>
      )}
      {favoriteFlag && (
        <View style={ContactsStyle.mostFrequentContainer}>
          <View style={ContactsStyle.contentContainer}>
            {!!hookups?.length &&
              !isSearch &&
              (filters.length > 0 ? filtered : hookups)
                .sort((hookup1, hookup2) => hookup1.time < hookup2.time)
                .slice(0, 3)
                .map((hookup, i) => (
                  <TouchableOpacity
                    onPress={() => onPressContact(hookup.friendId, hookup.name)}
                    style={[
                      ContactsStyle.contactContainer,
                      i > 0 ? ContactsStyle.topBorder : null,
                    ]}
                    key={`${hookup.name}-${i}`}>
                    <Text style={ContactsStyle.mostFrequentHookups}>
                      {hookup.name}
                    </Text>
                    <Image
                      path={require('../../assets/favorite.png')}
                      style={{width: 15, height: 15}}
                    />
                  </TouchableOpacity>
                ))}
          </View>
        </View>
      )}
    </ScrollView>
  );
});
