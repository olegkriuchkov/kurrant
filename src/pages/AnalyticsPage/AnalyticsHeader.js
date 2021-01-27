import {observer} from 'mobx-react';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {CloseBtn} from '../../components/CloseBtn';
import COLOR from '../../constants/COLOR';
import analyticsStore from '../../stores/analyticsStore';

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    backgroundColor: COLOR.DARKPINK,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  title: {
    fontSize: 35,
    color: COLOR.WHITE,
    marginVertical: 15,
    width: '100%',
    textTransform: 'capitalize',
  },
  tabContainer: {
    paddingBottom: 12,
    marginLeft: 17,
  },
  content: {
    marginLeft: 14,
  },
  selectedTabContainer: {
    borderBottomWidth: 3,
    borderBottomColor: COLOR.WHITE,
  },
  tabText: {
    fontSize: 16,
    color: COLOR.DARK_GREY,
  },
  selectedTabText: {
    color: COLOR.WHITE,
    fontSize: 16,
  },
  tabsContainer: {
    flexDirection: 'row',
  },
});

const tabs = [
  {
    label: 'Tracker',
    value: 'tracker',
  },
  {label: 'Activity', value: 'activity'},
  {
    label: 'Protection',
    value: 'protection',
  },
  {
    label: 'Substances',
    value: 'substances',
  },
];

const TabBtn = ({onPress, label, value, isSelected}) => {
  const textStyle = isSelected ? styles.selectedTabText : styles.tabText;
  const tabStyle = isSelected
    ? [styles.tabContainer, styles.selectedTabContainer]
    : styles.tabContainer;
  return (
    <TouchableOpacity onPress={() => onPress(value)} style={tabStyle}>
      <Text style={textStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

export const AnalyticsHeader = observer(() => {
  const {setSelectedTab, analyticsState} = analyticsStore;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <CloseBtn onPress={() => Actions.replace('Home')} />
        <Text style={styles.title}>{analyticsState.selectedTab}</Text>
      </View>
      <View style={styles.tabsContainer}>
        {tabs.map((tab) => (
          <TabBtn
            value={tab.value}
            label={tab.label}
            onPress={setSelectedTab}
            isSelected={analyticsState.selectedTab === tab.value}
            key={tab.value}
          />
        ))}
      </View>
    </SafeAreaView>
  );
});
