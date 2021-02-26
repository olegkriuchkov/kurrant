import {toJS} from 'mobx';
import {observer} from 'mobx-react';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {CalendarList} from 'react-native-calendars';
import COLOR from '../constants/COLOR';
import HookupStore from '../stores/HookupStore';
import TestsStore from '../stores/TestsStore';
import CalendarStyle from '../style/component/CalendarStyle';
import NavbarStyle from '../style/component/NavbarStyle';

export default observer(({date}) => {
  const weekday = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const theme = CalendarStyle(COLOR.PINK);
  const {markedTest, tests} = TestsStore;
  const {markedHookups, hookups} = HookupStore;
  const [marker, setMarker] = useState();
  useEffect(() => {
    setMarker({...markedTest, ...markedHookups});
  }, [tests.length, hookups.length]);

  return (
    <View style={{width: '100%'}}>
      <View style={NavbarStyle.weekdayContainer}>
        {weekday.map((day) => (
          <Text key={day + Math.random()} style={NavbarStyle.weekdayText}>
            {day}
          </Text>
        ))}
      </View>
      <CalendarList
        theme={theme}
        current={date}
        hideExtraDays
        hideDayNames
        markingType="custom"
        hideArrows
        markedDates={{
          ...marker,
        }}
      />
    </View>
  );
});
