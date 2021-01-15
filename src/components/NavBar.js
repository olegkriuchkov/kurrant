import React, {useState} from 'react';
import {Title} from 'native-base';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import {Actions} from 'react-native-router-flux';
import moment from 'moment';
import {Calendar, DateObject} from 'react-native-calendars';
import Icon from './Icon';

import COLOR from '../constants/COLOR';
import NavbarStyle from '../style/component/NavbarStyle';
import CalendarStyle from '../style/component/CalendarStyle';
import CustomCalendar from './Calendar';
import CalendarButton from './CalendarButton';

const NavBar = ({
  title,
  arrowBack,
  color,
  onPress,
  titleStyle,
  settings,
  noStyle,
  calendar,
}) => {
  const [date, setDate] = useState(new Date(Date.now()));
  const [calendarFlag, setCalendarFlag] = useState(false);
  const press = (day) => {
    console.log(day);
    setDate(new Date(day.timestamp));
  };
  return (
    <View
      style={
        noStyle
          ? [NavbarStyle.noStyle, {backgroundColor: color}]
          : NavbarStyle.mainStyle
      }>
      <View style={{flexDirection: 'row'}}>
        {arrowBack && (
          <TouchableOpacity onPress={() => Actions.pop()}>
            <Image
              source={require('../assets/arrowBack.png')}
              style={{
                width: 25,
                height: 17,
                margin: 10,

                marginTop: 35,
              }}
            />
          </TouchableOpacity>
        )}
        <View style={NavbarStyle.container}>
          <View style={NavbarStyle.dateContaier}>
            <View style={NavbarStyle.dateText}>
              {!noStyle && (
                <Text style={[titleStyle, {fontSize: 20}]}>
                  {title || moment(date).format('MMMM')}
                </Text>
              )}
              {calendar && (
                <CalendarButton
                  onPress={() => setCalendarFlag(!calendarFlag)}
                  calendarFlag={calendarFlag}
                />
              )}
            </View>
            {settings && (
              <TouchableOpacity
                style={{marginTop: 5}}
                onPress={() => Actions.Settings()}>
                <Image
                  source={require('../assets/settings.png')}
                  style={{width: 17, height: 17, margin: 10, marginBottom: 15}}
                />
              </TouchableOpacity>
            )}
          </View>
          {calendarFlag && <CustomCalendar onPress={press} date={date} />}
        </View>
      </View>
    </View>
  );
};

NavBar.defaultProps = {};

export default NavBar;
