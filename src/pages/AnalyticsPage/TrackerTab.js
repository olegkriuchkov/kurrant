import React from 'react';
import {StyleSheet, View} from 'react-native';
import COLOR from '../../constants/COLOR';
import {AnalyticsList} from './AnalyticsList';
import {Chart} from './Chart';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: COLOR.DARKPINK,
  },
});

export const TrackerTab = () => {
  return (
    <View style={styles.container}>
      <Chart />
      <AnalyticsList title="Recent results" isFilter={true} />
    </View>
  );
};
