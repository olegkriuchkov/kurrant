import React from 'react';

import {Image, TouchableOpacity} from 'react-native';
import NavbarStyle from '../style/component/NavbarStyle';

const CalendarButton = ({onPress, calendarFlag}) => {
  const imageStyle = calendarFlag
    ? NavbarStyle.calendarButton
    : NavbarStyle.activeCalendarButton;
  return (
    <TouchableOpacity onPress={onPress} style={{alignSelf: 'center'}}>
      <Image style={imageStyle} source={require('../assets/more.png')} />
    </TouchableOpacity>
  );
};
export default CalendarButton;
