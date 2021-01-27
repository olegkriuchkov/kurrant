import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ProgressChart} from 'react-native-chart-kit';
import COLOR from '../../constants/COLOR';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  descriptionTitle: {
    fontSize: 36,
    color: COLOR.WHITE,
  },
  descriptionText: {
    fontSize: 15,
    color: COLOR.WHITE,
  },
  chart: {
    width: '100%',
    alignItems: 'center',
  },
  analyticsDescription: {
    position: 'absolute',
    maxWidth: 200,
    maxHeight: 200,
    justifyContent: 'center',
    alignItems: 'center',
    top: 135,
    left: 115,
  },
});

const chartConfig = {
  backgroundColor: COLOR.DARKPINK,
  backgroundGradientFrom: COLOR.DARKPINK,
  backgroundGradientTo: COLOR.DARKPINK,
  decimalPlaces: 2,
  color: (opacity = 1) => {
    return `rgba(255, 255, 255, ${opacity * 3})`;
  },
};

export const Chart = () => {
  const data = {
    data: [0.7],
  };
  return (
    <View style={styles.container}>
      <ProgressChart
        data={data}
        width={340}
        height={340}
        strokeWidth={43}
        radius={120}
        chartConfig={chartConfig}
        hideLegend={true}
        style={styles.chart}
      />
      <View style={styles.analyticsDescription}>
        <Text style={styles.descriptionTitle}>23 days</Text>
        <Text style={styles.descriptionText}>since last test</Text>
      </View>
    </View>
  );
};
