import {observer} from 'mobx-react';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import COLOR from '../../constants/COLOR';
import ContactIcon from './ContactIcon';
import HomeIcon from './HomeIcon';
import LogIcon from './LogIcon';

const styles = StyleSheet.create({
  icon: {width: 20, height: 22, marginTop: 10},
  dot: {
    width: 4,
    height: 4,
    backgroundColor: COLOR.NAVBARBORDER,
    borderRadius: 2,
    marginTop: 3,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const TabIcon = observer(({selectedIcon, onPress, iconName}) => {
  const iconColor =
    selectedIcon === iconName ? COLOR.NAVBARBORDER : COLOR.TAB_ICON;

  const icons = {
    contact: <ContactIcon fill={iconColor} />,
    home: <HomeIcon fill={iconColor} />,
    log: <LogIcon fill={iconColor} />,
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {icons[iconName]}
      {selectedIcon === iconName && <View style={styles.dot} />}
    </TouchableOpacity>
  );
});
