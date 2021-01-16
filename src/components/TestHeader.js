import moment from 'moment';
import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {Actions} from 'react-native-router-flux';
import NavbarStyle from '../style/component/NavbarStyle';
import TestsHeaderStyle from '../style/component/TestsHeaderStyle';
import CustomCalendar from './Calendar';
import CalendarButton from './CalendarButton';
import Tabs from './Tabs';

const TestsHeader = ({color, noStyle, calendar, tabs}) => {
  const [calendarFlag, setCalendarFlag] = useState(false);
  const press = (day) => {
    console.log(day);
    setDate(new Date(day.timestamp));
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
              Actions.pop();
            }}>
            <Image
              source={require('../assets/back.png')}
              style={TestsHeaderStyle.backImage}
            />
          </TouchableOpacity>
          <View style={TestsHeaderStyle.titlewrapper}>
            <Text style={TestsHeaderStyle.titleText}>New test results</Text>
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
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity style={TestsHeaderStyle.imageWrapper}>
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
};

TestsHeader.defaultProps = {};

export default TestsHeader;
