import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import COLOR from '../../constants/COLOR';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  title: {
    fontSize: 25,
    color: COLOR.WHITE,
  },
  filter: {
    fontSize: 16,
    color: COLOR.WHITE,
  },
  header: {
    paddingBottom: 18,
    width: '100%',
    borderBottomColor: COLOR.WHITE,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export const AnalyticsList = ({title, isFilter}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {isFilter && <Text style={styles.filter}>3 months</Text>}
      </View>
    </View>
  );
};
