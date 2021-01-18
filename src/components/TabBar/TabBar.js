import React from 'react';
import {TouchableOpacity, View, Image, StyleSheet} from 'react-native';

import {Actions} from 'react-native-router-flux';
import COLOR from '../../constants/COLOR';
import {TabIcon} from './TabIcon';

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
  <View style={styles.container}>
    {/* <TabIcon isSelected={true} onPress={() => Actions.Log()} /> */}
    {/* <TouchableOpacity onPress={() => Actions.Home()}>
      <Image source={require('../assets/home.png')} style={styles.icon} />
    </TouchableOpacity> */}
    {/* <TouchableOpacity onPress={() => Actions.Entry()}>
      <Image source={require('../assets/contacts.png')} style={styles.icon} />
    </TouchableOpacity> */}
  </View>
);

export default TabBar;
