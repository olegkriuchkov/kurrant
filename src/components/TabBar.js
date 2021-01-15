import React from 'react';
import {TouchableOpacity, View, Image} from 'react-native';

import {Actions} from 'react-native-router-flux';
import COLOR from '../constants/COLOR';

const TabBar = () => (
  <View
    style={{
      height: 50,
      justifyContent: 'space-around',
      flexDirection: 'row',
      borderTopColor: COLOR.NAVBARBORDER,
      borderColor: COLOR.WHITE,
      borderWidth: 1,
    }}>
    <TouchableOpacity onPress={() => Actions.Log()}>
      <Image
        source={require('../assets/Log.png')}
        style={{width: 25, height: 25, marginTop: 10}}
      />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => Actions.Home()}>
      <Image
        source={require('../assets/home.png')}
        style={{width: 25, height: 25, marginTop: 10}}
      />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => Actions.Entry()}>
      <Image
        source={require('../assets/contacts.png')}
        style={{width: 25, height: 25, marginTop: 10}}
      />
    </TouchableOpacity>
  </View>
);

export default TabBar;
