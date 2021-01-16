import React, {useState} from 'react';
import {Text, Image, TouchableOpacity, View} from 'react-native';

import {Actions} from 'react-native-router-flux';
import moment from 'moment';
import NavbarStyle from '../style/component/NavbarStyle';
import COLOR from '../constants/COLOR';
import TestsHeaderStyle from '../style/component/TestsHeaderStyle';
import CalendarButton from './CalendarButton';
import CustomCalendar from './Calendar';
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
              style={{width: 30, height: 30}}
            />
          </TouchableOpacity>
          <View style={{marginTop: 15}}>
            <Text style={{fontSize: 24, color: COLOR.PINK}}>
              New test results
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{flexDirection: 'column'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{fontSize: 24}}>
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
      <View style={{flexDirection: 'row', marginBottom: 0, marginRight: 5}}>
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
