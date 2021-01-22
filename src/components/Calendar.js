import moment from 'moment';
import React from 'react';
import {Text, View} from 'react-native';
import {CalendarList} from 'react-native-calendars';
import COLOR from '../constants/COLOR';
import CalendarStyle from '../style/component/CalendarStyle';
import NavbarStyle from '../style/component/NavbarStyle';

const CustomCalendar = ({onPress, date}) => {
  const weekday = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const theme = CalendarStyle(COLOR.PINK);

  return (
    <View style={{width: '100%'}}>
      <View style={NavbarStyle.weekdayContainer}>
        {weekday.map((day) => (
          <Text key={day + Math.random()} style={NavbarStyle.weekdayText}>
            {day}
          </Text>
        ))}
      </View>
      <CalendarList
        theme={theme}
        current={date}
        hideExtraDays
        hideDayNames
        markingType="custom"
        hideArrows
        onDayPress={(day) => {
          onPress(day);
        }}
        markedDates={{
          [moment(date).format('YYYY-MM-DD')]: {
            customStyles: {
              container: NavbarStyle.markerContainer,
              text: NavbarStyle.maerkerText,
            },
          },
        }}
      />
    </View>
  );
};
export default CustomCalendar;
