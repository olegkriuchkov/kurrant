import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {SearchBar, Icon} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import Image from '../../components/Image';
import COLOR from '../../constants/COLOR';
import ContactsStyle from '../../style/page/ContactsStyle';

const ContactsHeader = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <View style={styles.header}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.headerText}>Contacts</Text>

        <TouchableOpacity>
          <Image
            onPress={() => Actions.AddFriendEntry()}
            path={require('../../assets/plus.png')}
            style={{width: 30, height: 30, marginRight: 10}}
          />
        </TouchableOpacity>
      </View>
      <SearchBar
        placeholder="Search"
        onChangeText={(value) => setSearchValue(value.toLowerCase())}
        value={searchValue}
        lightTheme={true}
        inputStyle={ContactsStyle.searchField}
        containerStyle={{
          backgroundColor: 'transparent',
          padding: 10,
          borderColor: COLOR.WHITE,
        }}
        inputContainerStyle={{
          backgroundColor: 'white',
          borderRadius: 15,
          borderWidth: 2,
          /*
          borderBottomColor: 'lightgrey',
*/
        }}
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
});
