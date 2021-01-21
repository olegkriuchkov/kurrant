import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {observer} from 'mobx-react';
import Image from './Image';
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
          <Image
            path={require('../assets/back.png')}
            style={TestsHeaderStyle.backImage}
            onPress={() => {
              Actions.replace('Home');
              setTestSuccess(true);
            }}
          />
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
          <Image
            style={TestsHeaderStyle.image}
            path={require('../assets/okButton.png')}
            containerStyle={TestsHeaderStyle.imageWrapper}
            onPress={() => save()}
          />
        )}
        {!TestSuccess && (
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{width: 25, height: 25}}
              path={require('../assets/change.png')}
              onPress={() => setTestSuccess(true)}
            />
            <Image
              style={{width: 25, height: 25, marginLeft: 20}}
              path={require('../assets/delete.png')}
            />
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
