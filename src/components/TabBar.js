import React from 'react';

import {Image, TouchableOpacity, View} from 'react-native';


import {Actions} from 'react-native-router-flux';
import TabBarStyle from '../style/component/TabBarStyle';

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderTopColor: COLOR.NAVBARBORDER,
    borderColor: COLOR.WHITE,
    borderWidth: 1,
    marginBottom: 15,
  },
  icon: {width: 20, height: 22, marginTop: 10},
});

const TabBar = () => (

  <View style={TabBarStyle.main}>
    <TouchableOpacity onPress={() => Actions.Log()}>
      <Image source={require('../assets/Log.png')} style={TabBarStyle.image} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => Actions.Home()}>
      <Image source={require('../assets/home.png')} style={TabBarStyle.image} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => Actions.Entry()}>
      <Image
        source={require('../assets/contacts.png')}
        style={TabBarStyle.image}
      />

    </TouchableOpacity>
  </View>
);

export default TabBar;
