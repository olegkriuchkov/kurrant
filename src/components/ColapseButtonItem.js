import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import COLOR from '../constants/COLOR';
import FiendEntryStore from '../stores/FiendEntryStore';
import HookupStore from '../stores/HookupStore';
import globalStore from '../stores/globalStore';

const ColapseButtonItem = ({el}) => {
  const styles = StyleSheet.create({
    main: {
      margin: 10,
      width: '44%',
      borderRadius: 20,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  const [colorFlag, setColourFlag] = useState(false);
  const {filters, setFilters, deleteFilter} = FiendEntryStore;
  const {logFilters, setLogFilters, deleteLogFilter} = HookupStore;
  const {globalState} = globalStore;
  const set = () => {
    if (globalState.selectedTab === 'contactFilters') {
      filters.includes(el) ? deleteFilter(el) : setFilters(el);
    } else {
      logFilters.includes(el) ? deleteLogFilter(el) : setLogFilters(el);
    }
    setColourFlag(!colorFlag);
  };
  useEffect(() => {
    if (filters.includes(el)) {
      setColourFlag(true);
    }
  }, []);
  return (
    <TouchableOpacity
      onPress={() => {
        set();
      }}
      style={[
        styles.main,
        {backgroundColor: colorFlag ? COLOR.PINK : COLOR.WHITE},
      ]}>
      <Text style={{color: colorFlag ? COLOR.WHITE : COLOR.BLACK}}>{el}</Text>
    </TouchableOpacity>
  );
};

export default ColapseButtonItem;
