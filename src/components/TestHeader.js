import {toJS} from 'mobx';
import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View, TextInput} from 'react-native';

import {Actions} from 'react-native-router-flux';
import {observer} from 'mobx-react';
import NavbarStyle from '../style/component/NavbarStyle';
import TestsHeaderStyle from '../style/component/TestsHeaderStyle';
import CustomCalendar from './Calendar';
import CalendarButton from './CalendarButton';
import Tabs from './Tabs';
import TestsStore from '../stores/TestsStore';
import HookupStore from '../stores/HookupStore';

export default observer(
  ({color, noStyle, calendar, tabs, hookup = false, entry = false}) => {
    const [calendarFlag, setCalendarFlag] = useState(false);
    const {setTestDate, setTest, setTestNote} = TestsStore;
    const {setHookups, setHookupDate, setHookupNote, setName} = HookupStore;

    useEffect(() => {
      hookup
        ? setHookupDate(new Date(Date.now()))
        : setTestDate(new Date(Date.now()));
    }, []);

    const save = () => {
      if (hookup) {
        setHookups();
        setHookupNote();
      } else {
        setTest();
        setTestNote();
      }
    };
    const press = (day) => {
      setDate(new Date(day.timestamp));
      hookup ? setHookupDate(date) : setTestDate(date);
    };
    const [date, setDate] = useState(new Date(Date.now()));
    const [select, setSelect] = useState(true);
    return (
      <View
        style={
          noStyle
            ? [NavbarStyle.noStyle, {backgroundColor: color}]
            : TestsHeaderStyle.mainStyle
        }>
        <View style={TestsHeaderStyle.mainWrapper}>
          <View>
            <TouchableOpacity
              onPress={() => {
                Actions.replace('Home');
              }}>
              <Image
                source={require('../assets/back.png')}
                style={TestsHeaderStyle.backImage}
              />
            </TouchableOpacity>
            <View style={TestsHeaderStyle.titlewrapper}>
              {!entry && (
                <Text style={TestsHeaderStyle.titleText}>New test results</Text>
              )}
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
                  {calendarFlag && (
                    <CustomCalendar onPress={press} date={date} />
                  )}
                  {entry && (
                    <TextInput
                      onChangeText={(text) => setName(text)}
                      placeholder="Enter name"
                      style={TestsHeaderStyle.inputStyle}
                    />
                  )}
                </View>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={TestsHeaderStyle.imageWrapper}
            onPress={() => save()}>
            <Image
              style={TestsHeaderStyle.image}
              source={require('../assets/okButton.png')}
            />
          </TouchableOpacity>
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
  },
);
