import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View, TextInput} from 'react-native';

import {Actions} from 'react-native-router-flux';
import {observer} from 'mobx-react';
import TestsHeaderStyle from '../style/component/TestsHeaderStyle';
import CustomCalendar from './Calendar';
import CalendarButton from './CalendarButton';
import Tabs from './Tabs';
import HookupStore from '../stores/HookupStore';

export default observer(({calendar, tabs}) => {
  const [calendarFlag, setCalendarFlag] = useState(false);
  const {
    setHookups,
    setHookupDate,
    setHookupNote,
    setHookupSuccess,
    setName,
    HookupSuccess,
  } = HookupStore;

  useEffect(() => {
    setHookupDate(new Date(Date.now()));
  }, []);

  const save = () => {
    setHookups();
    setHookupNote();
    setHookupSuccess(false);
  };
  const press = (day) => {
    setDate(new Date(day.timestamp));
    setHookupDate(date);
  };

  const [date, setDate] = useState(new Date(Date.now()));
  const [select, setSelect] = useState(true);
  return (
    <View style={TestsHeaderStyle.mainStyle}>
      <View style={TestsHeaderStyle.mainWrapper}>
        <View>
          <TouchableOpacity
            onPress={() => {
              Actions.replace('Home');
              setHookupSuccess(true);
            }}>
            <Image
              source={require('../assets/back.png')}
              style={TestsHeaderStyle.backImage}
            />
          </TouchableOpacity>
          <View style={TestsHeaderStyle.titlewrapper}>
            <View style={TestsHeaderStyle.headWrapper}>
              <View style={TestsHeaderStyle.columnWrapper}>
                <View style={TestsHeaderStyle.headWrapper}>
                  <Text style={TestsHeaderStyle.date}>
                    {moment(date).format('MMMM D')}
                  </Text>
                  {calendar && (
                    <CalendarButton
                      onPress={() => setCalendarFlag(!calendarFlag)}
                      calendarFlag={calendarFlag}
                    />
                  )}
                </View>
                {calendarFlag && <CustomCalendar onPress={press} date={date} />}

                <TextInput
                  onChangeText={(text) => setName(text)}
                  placeholder="Enter name"
                  style={TestsHeaderStyle.inputStyle}
                />
              </View>
            </View>
          </View>
        </View>
        {HookupSuccess && (
          <TouchableOpacity
            style={TestsHeaderStyle.imageWrapper}
            onPress={() => save()}>
            <Image
              style={TestsHeaderStyle.image}
              source={require('../assets/okButton.png')}
            />
          </TouchableOpacity>
        )}
        {!HookupSuccess && (
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => setHookupSuccess(true)}>
              <Image
                style={{width: 25, height: 25}}
                source={require('../assets/change.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{width: 25, height: 25, marginLeft: 20}}
                source={require('../assets/delete.png')}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View style={TestsHeaderStyle.mainTabsWrapper}>
        <Tabs
          tabs={tabs}
          onPress={(tabId) => setSelect(tabId)}
          defaultTab={tabs[0]}
        />
      </View>
    </View>
  );
});
