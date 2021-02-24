import {observer} from 'mobx-react';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import GoogleSearch from '../../components/GoogleSearch';
import COLOR from '../../constants/COLOR';
import FiendEntryStore from '../../stores/FiendEntryStore';
import TestsHeaderStyle from '../../style/component/TestsHeaderStyle';

export default observer(({countryFilter}) => {
  const {setCountryFilter} = FiendEntryStore;

  return (
    <View style={TestsHeaderStyle.mainStyle}>
      <View style={{height: '100%', backgroundColor: COLOR.TAB_ICON}}>
        <TouchableOpacity
          onPress={() => setCountryFilter(null)}
          style={{top: 120, left: 25}}>
          <Text style={{fontSize: 15}}>Clear filter</Text>
        </TouchableOpacity>
        <GoogleSearch countryFilter={countryFilter} />
      </View>
    </View>
  );
});
