import React, { useState } from 'react';
import {Text, View, ScrollView, StyleSheet, Image} from 'react-native';
import ContactsStyle from '../../style/page/ContactsStyle';
import { SearchBar, Icon } from 'react-native-elements';
import {Actions} from 'react-native-router-flux';


const ContactsHeader = () => {
    const [searchValue, setSearchValue] = useState('');

    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Contacts</Text>
            <SearchBar
                placeholder="Search"
                onChangeText={(value)=> setSearchValue(value.toLowerCase())}
                value={searchValue}
                lightTheme={true}
                inputStyle={ContactsStyle.searchField}
                containerStyle={{backgroundColor: 'transparent', padding: 10, }}
                inputContainerStyle={{backgroundColor: 'white', borderRadius: 15, borderWidth: 2, borderColor: 'lightgrey'}}
                searchIcon={
                <Icon
                    Component={() => <Image source={require('../../assets/search.png')} />}
                />
                }
            />
        </View>
    )
}

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