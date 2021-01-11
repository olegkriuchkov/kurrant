import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import Icon from './Icon';

const TabBar = () => (
  <View
    style={{
      height: 50,
      justifyContent: 'space-around',
      flexDirection: 'row',
    }}>
    <TouchableOpacity>
      <Icon iconType="plus" height={50} width={50} />
    </TouchableOpacity>
    <TouchableOpacity>
      <Icon iconType="plus" height={50} width={50} />
    </TouchableOpacity>
    <TouchableOpacity>
      <Icon iconType="plus" height={50} width={50} />
    </TouchableOpacity>
  </View>
);

export default TabBar;
