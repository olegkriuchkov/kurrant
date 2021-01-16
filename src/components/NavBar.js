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
  pop,
  calendar,
  cancel,
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
              style={NavbarStyle.arrowBack}
            />
          </TouchableOpacity>
        )}
        {cancel && (
          <TouchableOpacity
            style={NavbarStyle.canelWrapper}
            onPress={() => Actions.pop()}>
            <Text style={NavbarStyle.cancel}>Cancel</Text>
          </TouchableOpacity>
        )}
        {pop && (
          <TouchableOpacity onPress={() => Actions.pop()}>
            <Image
              source={require('../assets/pop.png')}
              style={NavbarStyle.pop}
            />
          </TouchableOpacity>
        )}
        <View style={NavbarStyle.container}>
          <View style={NavbarStyle.dateContaier}>
            <View style={NavbarStyle.dateText}>
              {!noStyle && (
                <Text style={[titleStyle, {fontSize: 20}]}>
                  {moment(date).format('MMMM DD') || title}
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
                  style={NavbarStyle.settings}
                />
              </TouchableOpacity>
            )}
          </View>
          {calendarFlag && (
            <CustomCalendar
              onPress={press}
              date={date}
              onEndReserch={() => setDate((prev) => moment(prev).add('month'))}
            />
          )}
        </View>
      </View>
    </View>
  );
};

NavBar.defaultProps = {};

export default NavBar;
