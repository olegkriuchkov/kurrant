import {observer} from 'mobx-react';
import React, {useRef} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import COLOR from '../constants/COLOR';
import FiendEntryStore from '../stores/FiendEntryStore';
import Image from './Image';

export default observer(({hookup}) => {
  const {
    setSearchValue,
    searchValue,
    isSearch,
    setIsSearch,
    setSearchHistory,
  } = FiendEntryStore;
  const refBlur = useRef();
  return (
    <View
      style={
        !isSearch
          ? hookup
            ? [
                styles.inputContainerStyle,
                {backgroundColor: COLOR.WHITE, right: 20},
              ]
            : styles.inputContainerStyle
          : [
              styles.inputContainerStyle,
              {backgroundColor: COLOR.WHITE, minWidth: '93%', marginBottom: 15},
            ]
      }>
      {!hookup && (
        <Image
          path={require('../assets/search.png')}
          style={{marginRight: 10}}
        />
      )}
      <TextInput
        ref={refBlur}
        placeholder={hookup ? 'Enter name' : 'Search'}
        style={
          !isSearch
            ? hookup
              ? [styles.searchInput, {backgroundColor: COLOR.WHITE}]
              : styles.searchInput
            : [styles.searchInput, {backgroundColor: COLOR.WHITE}]
        }
        onChangeText={(value) => {
          setSearchValue(value);
        }}
        onBlur={() => setSearchHistory(searchValue)}
        onFocus={() => setIsSearch(true)}
        value={
          hookup && searchValue.length > 0
            ? searchValue[0]?.toUpperCase() +
              searchValue.slice(1, searchValue.length)
            : searchValue
        }
      />
      {isSearch && (
        <TouchableOpacity
          onPress={() => {
            console.log('I');
            setIsSearch(false);
            setSearchValue('');
            refBlur.current?.blur();
          }}
          style={hookup ? {left: 50} : {left: 50}}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      )}
    </View>
  );
});
const styles = StyleSheet.create({
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
