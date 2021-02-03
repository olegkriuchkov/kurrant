import React, {useState} from 'react';
import {Text, View, ScrollView, StyleSheet, Image} from 'react-native';
import {SearchBar, Icon} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import COLOR from '../../constants/COLOR';
import ContactsStyle from '../../style/page/ContactsStyle';

const ContactsHeader = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Contacts</Text>
      <SearchBar
        placeholder="Search"
        onChangeText={(value) => setSearchValue(value.toLowerCase())}
        value={searchValue}
        lightTheme={true}
        containerStyle={styles.containerStyle}
        inputContainerStyle={styles.inputContainerStyle}
        searchIcon={
          <Icon
            Component={() => (
              <Image source={require('../../assets/search.png')} />
            )}
          />
        }
      />
    </View>
  );
};

export default ContactsHeader;

const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    paddingLeft: 18,
  },
  headerText: {
    fontSize: 24,
    color: 'black',
  },
  containerStyle: {
    backgroundColor: 'transparent',
    padding: 10,
    borderBottomWidth: 0,
    borderTopWidth: 0,
  },
  inputContainerStyle: {
    backgroundColor: COLOR.WHITE,
    borderRadius: 15,
  },
});
