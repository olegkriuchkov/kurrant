import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import Image from '../../components/Image';
import COLOR from '../../constants/COLOR';

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
        inputStyle={styles.searchInput}
        containerStyle={styles.containerStyle}
        inputContainerStyle={styles.inputContainerStyle}
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
    backgroundColor: COLOR.WHITE,
    shadowColor: COLOR.BLACK,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  headerText: {
    fontSize: 24,
    color: 'black',
  },
  containerStyle: {
    backgroundColor: COLOR.WHITE,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    padding: 0,
    marginTop: 16,
    marginBottom: 20,
    marginRight: 18,
  },
  inputContainerStyle: {
    backgroundColor: COLOR.LIGHT_GREY,
    borderRadius: 15,
    paddingLeft: 18,
  },
  titleContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  plusIcon: {width: 20, height: 20, marginRight: 18},
  searchContainer: {
    backgroundColor: 'transparent',
    padding: 10,
    borderColor: COLOR.WHITE,
  },
  searchInput: {
    backgroundColor: COLOR.LIGHT_GREY,
  },
});
