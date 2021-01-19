import {toJS} from 'mobx';
import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View, TextInput} from 'react-native';

import {Actions} from 'react-native-router-flux';
import {observer} from 'mobx-react';
import COLOR from '../constants/COLOR';
import NavbarStyle from '../style/component/NavbarStyle';
import TestsHeaderStyle from '../style/component/TestsHeaderStyle';
import CustomCalendar from './Calendar';
import CalendarButton from './CalendarButton';
import Tabs from './Tabs';
import TestsStore from '../stores/TestsStore';

export default observer(({color, noStyle, calendar, tabs}) => {
  const [calendarFlag, setCalendarFlag] = useState(false);
  const {
    setTestDate,
    setTest,
    setTestNote,
    setTestSuccess,
    TestSuccess,
  } = TestsStore;

  useEffect(() => {
    setTestDate(new Date(Date.now()));
  }, []);

  const save = () => {
    setTest();
    setTestNote();
    setTestSuccess(false);
  };
  const press = (day) => {
    setDate(new Date(day.timestamp));
    setTestDate(date);
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
              setTestSuccess(true);
            }}>
            <Image
              source={require('../assets/back.png')}
              style={TestsHeaderStyle.backImage}
            />
          </TouchableOpacity>
          <View style={TestsHeaderStyle.titlewrapper}>
            <Text
              style={
                TestSuccess
                  ? TestsHeaderStyle.titleText
                  : [TestsHeaderStyle.titleText, {color: COLOR.BLACK}]
              }>
              {TestSuccess ? 'New test results' : 'Test result'}
            </Text>
            <View style={TestsHeaderStyle.headWrapper}>
              <View style={TestsHeaderStyle.columnWrapper}>
                <View style={TestsHeaderStyle.headWrapper}>
                  <Text style={TestsHeaderStyle.date}>
                    {moment(date).format('MMMM D')}
                  </Text>
                  {calendar && TestSuccess && (
                    <CalendarButton
                      onPress={() => setCalendarFlag(!calendarFlag)}
                      calendarFlag={calendarFlag}
                    />
                  )}
                </View>
                {calendarFlag && <CustomCalendar onPress={press} date={date} />}
              </View>
            </View>
          </View>
        </View>
        {TestSuccess && (
          <TouchableOpacity
            style={TestsHeaderStyle.imageWrapper}
            onPress={() => save()}>
            <Image
              style={TestsHeaderStyle.image}
              source={require('../assets/okButton.png')}
            />
          </TouchableOpacity>
        )}
        {!TestSuccess && (
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => setTestSuccess(true)}>
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
