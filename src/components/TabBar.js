import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import {Actions} from 'react-native-router-flux';
import Icon from './Icon';

const TabBar = () => (
  <View
    style={{
      height: 50,
      justifyContent: 'space-around',
      flexDirection: 'row',
    }}>
    <TouchableOpacity onPress={() => Actions.Log()}>
      <Icon iconType="plus" height={50} width={50} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => Actions.Home()}>
      <Icon iconType="plus" height={50} width={50} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => Actions.Contacts()}>
      <Icon iconType="plus" height={50} width={50} />
    </TouchableOpacity>
  </View>
);

export default TabBar;
