import React from 'react';

import {Image, TouchableOpacity} from 'react-native';
import NavbarStyle from '../style/component/NavbarStyle';

const CalendarButton = ({onPress, calendarFlag}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{alignSelf: 'center'}}>
      <Image
        style={
          calendarFlag
            ? NavbarStyle.calendarButton
            : NavbarStyle.activeCalendarButton
        }
        source={require('../assets/more.png')}
      />
    </TouchableOpacity>
  );
};
export default CalendarButton;
