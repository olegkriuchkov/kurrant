import {observer} from 'mobx-react';
import * as React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {Actions} from 'react-native-router-flux';
import COLOR from '../constants/COLOR';
import FiendEntryStore from '../stores/FiendEntryStore';

const GOOGLE_PLACES_API_KEY = 'AIzaSyBtEHS3F6pMho8FpPoWZGS9MbnhVymfZlM';

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: COLOR.WHITE,
    marginHorizontal: 25,
    borderRadius: 10,
    fontSize: 20,
  },
  listView: {marginHorizontal: 25, borderRadius: 10},
  container: {
    marginTop: 40,
  },
  description: {
    fontSize: 20,
  },
  cancel: {
    position: 'absolute',
    top: 55,
    left: '74%',
  },
  cancelText: {
    color: COLOR.DARK_GREY,
  },
});

export default observer(({countryFilter}) => {
  const {
    setLocation,
    setLocationFlag,
    setCountryFilter,
    setFilters,
  } = FiendEntryStore;

  return (
    <>
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={{
          textInput: styles.textInput,
          listView: styles.listView,
          container: styles.container,
          description: styles.description,
        }}
        query={{
          key: GOOGLE_PLACES_API_KEY,
          language: 'en',
        }}
        onPress={(data) => {
          if (countryFilter) {
            setCountryFilter(data.description);
          } else {
            setLocation(data.description);
          }
        }}
        onFail={(error) => console.error(error)}
      />
      <TouchableOpacity
        style={styles.cancel}
        onPress={() => {
          if (countryFilter) {
            Actions.pop();
          } else setLocationFlag(false);
        }}>
        <Text style={styles.cancelText}>Cancel</Text>
      </TouchableOpacity>
    </>
  );
});
