import React from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import COLOR from '../../constants/COLOR';
import ContactIcon from './ContactIcon';

const styles = StyleSheet.create({
  icon: {width: 20, height: 22, marginTop: 10},
  dot: {
    width: 2,
    height: 2,
    backgroundColor: COLOR.BLACK,
    borderRadius: 1,
  },
});

export const TabIcon = ({isSelected, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ContactIcon fill={COLOR.BLACK} />
      {isSelected && <View style={styles.dot} />}
    </TouchableOpacity>
  );
};
