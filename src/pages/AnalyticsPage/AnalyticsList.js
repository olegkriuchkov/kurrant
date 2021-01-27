import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import FilterIcon from '../../components/icons/FilterIcon';
import COLOR from '../../constants/COLOR';
import {AnalyticsListItem} from './AnalyticsListItem';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 35,
  },
  title: {
    fontSize: 25,
    color: COLOR.WHITE,
  },
  filter: {
    fontSize: 16,
    color: COLOR.WHITE,
    marginRight: 5,
  },
  header: {
    paddingBottom: 18,
    width: '100%',
    borderBottomColor: COLOR.WHITE,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export const AnalyticsList = ({
  title,
  isFilter,
  items,
  onItemPress,
  onFilterChange,
  filterItems,
  selectedFilterItem,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {isFilter && (
          <RNPickerSelect onValueChange={onFilterChange} items={filterItems}>
            <View style={styles.filterContainer}>
              <Text style={styles.filter}>{selectedFilterItem}</Text>
              <FilterIcon />
            </View>
          </RNPickerSelect>
        )}
      </View>
      <View>
        {items.map((item, key) => (
          <AnalyticsListItem
            item={item}
            onPress={onItemPress}
            key={`${item.text}-${key}`}
          />
        ))}
      </View>
    </View>
  );
};
