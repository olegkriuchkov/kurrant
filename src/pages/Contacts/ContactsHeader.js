import {toJS} from 'mobx';
import {observer} from 'mobx-react';
import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Image from '../../components/Image';
import COLOR from '../../constants/COLOR';
import FiendEntryStore from '../../stores/FiendEntryStore';
import AddIcon from '../../assets/AddIcon';
import Icon from '../../components/Icon';

export default observer(() => {
  const {
    setSearchValue,
    searchValue,
    isSearch,
    setIsSearch,
    setFiendSucess,
    setContacID,
    setSearchHistory,
    filters,
    searchHistory,
  } = FiendEntryStore;
  const refBlur = useRef();
  return (
    <View
      style={!isSearch ? styles.header : {backgroundColor: COLOR.LIGHT_GREY}}>
      {!isSearch && (
        <View style={styles.titleContainer}>
          <Text style={styles.headerText}>Contacts</Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              {filters.length > 0 && (
                <View
                  style={{
                    position: 'absolute',
                    borderRadius: 50,
                    backgroundColor: COLOR.PINK,
                    width: 16,
                    height: 16,
                    alignItems: 'center',
                    bottom: 22,
                    left: 10,
                  }}>
                  <Text style={{fontSize: 12, color: COLOR.WHITE}}>
                    {filters.length}
                  </Text>
                </View>
              )}
              <Image
                onPress={() => Actions.ContactsFilters()}
                path={require('../../assets/settings.png')}
                style={styles.filtersIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setFiendSucess(true);
                setContacID(null);
                Actions.AddFriendEntry();
              }}
              style={styles.plusIcon}>
              <AddIcon />
            </TouchableOpacity>
          </View>
        </View>
      )}
      <View style={!isSearch ? styles.containerStyle : styles.seletedContainer}>
        <View
          style={
            !isSearch
              ? styles.inputContainerStyle
              : [styles.inputContainerStyle, {backgroundColor: COLOR.WHITE}]
          }>
          <Image
            path={require('../../assets/search.png')}
            style={{marginRight: 10}}
          />
          <TextInput
            ref={refBlur}
            placeholder="Search"
            style={
              !isSearch
                ? styles.searchInput
                : [styles.searchInput, {backgroundColor: COLOR.WHITE}]
            }
            onChangeText={(value) => {
              setSearchValue(value);
            }}
            onBlur={() => setSearchHistory(searchValue)}
            onFocus={() => setIsSearch(true)}
            value={searchValue}
          />
          {isSearch && (
            <TouchableOpacity
              onPress={() => {
                setIsSearch(false);
                setSearchValue('');
                refBlur.current?.blur();
              }}
              style={{left: 50}}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
});

export const styles = StyleSheet.create({
  cancelText: {fontSize: 15, opacity: 0.4},
  seletedContainer: {
    backgroundColor: COLOR.WHITE,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    padding: 0,
    marginTop: 70,
    margin: 20,
    borderRadius: 15,
  },
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
    flexDirection: 'row',
    alignItems: 'center',
    height: 47,
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
    borderRadius: 15,
    fontSize: 20,
    width: 200,
  },
  filtersIcon: {width: 25, height: 19, marginRight: 15},
});
