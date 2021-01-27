import React, {useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {SearchBar, Icon} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import ContactsStyle from '../../style/page/ContactsStyle';

const contacts = [
  'Pete Davidson',
  'Ryan Raynolds',
  'Chad',
  'Alan Wong',
  'Bill',
  'Zill',
  'Mike',
  'Adam',
  'Chris',
  'Cody',
  'Paul',
  'Bob',
  'Michael',
  'Henry',
  'Harry',
];

const Contacts = () => {
  const [searchValue, setSearchValue] = useState('');

  const getLetters = () => {
    const letters = [];
    for (let i = 65; i <= 90; i++) {
      letters.push(String.fromCharCode(i));
    }

    return letters;
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
      {!searchValue
        ? getLetters().map((letter, i) => {
            return (
              <View key={i} style={ContactsStyle.letterBlock}>
                <Text>{letter}</Text>
                {contacts.map((contact, i) => {
                  if (contact.charAt(0) === letter) {
                    return (
                      <Text style={ContactsStyle.contact} key={i}>
                        {contact}
                      </Text>
                    );
                  }
                })}
              </View>
            );
          })
        : contacts.map((contact, i) => {
            return contact.toLowerCase().startsWith(searchValue) ? (
              <Text style={ContactsStyle.contact} key={i}>
                {contact}
              </Text>
            ) : null;
          })}
    </ScrollView>
  );
};

export default Contacts;
