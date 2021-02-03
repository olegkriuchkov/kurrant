import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import Image from '../../components/Image';
import COLOR from '../../constants/COLOR';
import ContactsStyle from '../../style/page/ContactsStyle';

const ContactsHeader = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <Text style={styles.headerText}>Contacts</Text>

        <TouchableOpacity>
          <Image
            onPress={() => Actions.AddFriendEntry()}
            path={require('../../assets/plus.png')}
            style={styles.plusIcon}
          />
        </TouchableOpacity>
      </View>
      <SearchBar
        placeholder="Search"
        onChangeText={(value) => setSearchValue(value.toLowerCase())}
        value={searchValue}
        lightTheme={true}
        inputStyle={ContactsStyle.searchField}
        containerStyle={styles.searchContainer}
        inputContainerStyle={styles.searchInput}
        searchIcon={<Image path={require('../../assets/search.png')} />}
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
  titleContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  plusIcon: {width: 30, height: 30, marginRight: 10},
  searchContainer: {
    backgroundColor: 'transparent',
    padding: 10,
    borderColor: COLOR.WHITE,
  },
  searchInput: {
    backgroundColor: 'white',
    borderRadius: 15,
    borderWidth: 2,
    borderBColor: 'lightgrey',
  },
});
