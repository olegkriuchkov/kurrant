import moment from 'moment';
import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import NavbarStyle from '../style/component/NavbarStyle';
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
              style={NavbarStyle.arrow}
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
                style={NavbarStyle.settingBtn}
                onPress={() => Actions.Settings()}>
                <Image
                  source={require('../assets/settings.png')}
                  style={NavbarStyle.settingIcon}
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
