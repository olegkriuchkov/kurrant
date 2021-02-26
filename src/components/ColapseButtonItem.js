import {observer} from 'mobx-react';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import COLOR from '../constants/COLOR';
import FiendEntryStore from '../stores/FiendEntryStore';
import globalStore from '../stores/globalStore';
import HookupStore from '../stores/HookupStore';

export default observer(({el, title, count, setCount}) => {
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
  const {
    filters,
    setFilters,
    deleteFilter,
    setIncludesFilters,
    includesFilters,
  } = FiendEntryStore;
  const {
    logFilters,
    setLogFilters,
    deleteLogFilter,
    setIncludeFilters,
    includeFilters,
  } = HookupStore;
  const {globalState} = globalStore;
  const setActive = (char) => {
    if (title === 'Activities' && char === '+') {
      setIncludeFilters({
        ...includeFilters,
        activity: includeFilters.activity + 1,
      });
    } else if (title === 'Activities' && char === '-') {
      setIncludeFilters({
        ...includeFilters,
        activity: includeFilters.activity - 1,
      });
    }
    if (title === 'Protection' && char === '+') {
      setIncludeFilters({
        ...includeFilters,
        protection: includeFilters.protection + 1,
      });
    } else if (title === 'Protection' && char === '-') {
      setIncludeFilters({
        ...includeFilters,
        protection: includeFilters.protection - 1,
      });
    }
    if (title === 'Substance' && char === '+') {
      setIncludeFilters({
        ...includeFilters,
        substance: includeFilters.substance + 1,
      });
    } else if (title === 'Substance' && char === '-') {
      setIncludeFilters({
        ...includeFilters,
        substance: includeFilters.substance - 1,
      });
    }
    if (title === 'Status' && char === '+') {
      setIncludesFilters({
        ...includesFilters,
        status: includesFilters.status + 1,
      });
    } else if (title === 'Status' && char === '-') {
      setIncludesFilters({
        ...includesFilters,
        status: includesFilters.status - 1,
      });
    }
    if (title === 'Position' && char === '+') {
      setIncludesFilters({
        ...includesFilters,
        position: includesFilters.position + 1,
      });
    } else if (title === 'Position' && char === '-') {
      setIncludesFilters({
        ...includesFilters,
        position: includesFilters.position - 1,
      });
    }
  };

  const set = () => {
    if (globalState.selectedTab === 'contactFilters') {
      filters.includes(el) ? setActive('-') : setActive('+');
      filters.includes(el) ? deleteFilter(el) : setFilters(el);
    } else {
      logFilters.includes(el) ? setActive('-') : setActive('+');
      logFilters.includes(el) ? deleteLogFilter(el) : setLogFilters(el);
    }
    setColourFlag(!colorFlag);
  };
  useEffect(() => {
    if (filters.includes(el)) {
      setColourFlag(true);
    }
    if (logFilters.includes(el)) {
      setColourFlag(true);
    }
    if (
      globalState.selectedTab !== 'contactFilters' &&
      logFilters.length === 0
    ) {
      setColourFlag(false);
    }
    if (globalState.selectedTab === 'contactFilters' && filters.length === 0) {
      setColourFlag(false);
    }
  }, [filters.length, logFilters.length]);
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
});
