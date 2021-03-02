import {observer} from 'mobx-react';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import AddIcon from '../../assets/AddIcon';
import Image from '../../components/Image';
import Search from '../../components/Search';
import COLOR from '../../constants/COLOR';
import FiendEntryStore from '../../stores/FiendEntryStore';

export default observer(() => {
  const {
    isSearch,
    setFiendSucess,
    setContacID,
    filters,
    favoriteFlag,
    countryFilter,
  } = FiendEntryStore;
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
                    {filters.length +
                      (favoriteFlag ? 1 : 0) +
                      (countryFilter?.length > 0 ? 1 : 0)}
                  </Text>
                </View>
              )}
              {filters.length === 0 && (favoriteFlag || countryFilter) && (
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
                    {filters?.length +
                      (favoriteFlag ? 1 : 0) +
                      (countryFilter?.length > 0 ? 1 : 0)}
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
        <Search />
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
