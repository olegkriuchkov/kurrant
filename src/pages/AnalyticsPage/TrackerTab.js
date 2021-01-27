import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import COLOR from '../../constants/COLOR';
import {defaultFilterItems} from '../../constants/defaultFilterItems';
import {AnalyticsList} from './AnalyticsList';
import {Chart} from './Chart';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: COLOR.DARKPINK,
    paddingHorizontal: 21,
  },
});

const mockedHookups = [
  {date: new Date(), text: 'Some Hookup1'},
  {date: new Date(), text: 'Some Hookup2'},
  {date: new Date(), text: 'Some Hookup3'},
  {date: new Date(), text: 'Some Hookup4'},
];

const historyOfSTI = [
  {text: 'Chlamydia'},
  {text: 'Gonorrhea'},
  {text: 'HIV'},
  {text: 'Syphilis'},
  {text: 'Other'},
];

export const TrackerTab = () => {
  const [selectedFilterItem, setSelectedFilterItem] = useState(
    defaultFilterItems[0].value,
  );
  const onFilterChange = (value) => {
    // TODO: filter logic here
    if (!value) setSelectedFilterItem(defaultFilterItems[0]);
    setSelectedFilterItem(value);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Chart />
        <AnalyticsList
          title="Recent results"
          isFilter={true}
          items={mockedHookups}
          filterItems={defaultFilterItems}
          onFilterChange={onFilterChange}
          selectedFilterItem={selectedFilterItem}
        />
        <AnalyticsList
          title="STI History"
          items={historyOfSTI}
          onItemPress={() => {}}
        />
      </View>
    </ScrollView>
  );
};
