import {observer} from 'mobx-react';
import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {Actions} from 'react-native-router-flux';
import COLOR from '../constants/COLOR';
import FiendEntryStore from '../stores/FiendEntryStore';

const GOOGLE_PLACES_API_KEY = 'AIzaSyBtEHS3F6pMho8FpPoWZGS9MbnhVymfZlM';

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
          textInput: {
            backgroundColor: COLOR.WHITE,
            marginHorizontal: 25,
            borderRadius: 10,
            fontSize: 20,
          },
          listView: {marginHorizontal: 25, borderRadius: 50},
          container: {
            marginTop: 40,
          },
          description: {
            fontSize: 20,
          },
        }}
        query={{
          key: GOOGLE_PLACES_API_KEY,
          language: 'en',
        }}
        onPress={(data, details = null) => {
          if (countryFilter) {
            setCountryFilter(data.description);
          } else {
            setLocation(data.description);
          }
        }}
        onFail={(error) => console.error(error)}
      />
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: countryFilter ? 70 : 50,
          left: '78%',
        }}
        onPress={() => {
          if (countryFilter) {
            Actions.pop();
          } else setLocationFlag(false);
        }}>
        <Text>Cancel</Text>
      </TouchableOpacity>
    </>
  );
});
