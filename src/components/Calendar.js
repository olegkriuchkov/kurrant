import React from 'react';
import {Text, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';
import NavbarStyle from '../style/component/NavbarStyle';
import COLOR from '../constants/COLOR';
import CalendarStyle from '../style/component/CalendarStyle';

const CustomCalendar = ({onPress, date}) => {
  const weekday = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const theme = CalendarStyle(COLOR.PINK);

  return (
    <View style={{width: '100%'}}>
      <View style={NavbarStyle.weekdayContainer}>
        {weekday.map((day) => (
          <Text style={NavbarStyle.weekdayText}>{day}</Text>
        ))}
      </View>
      <Calendar
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
              container: {
                backgroundColor: COLOR.PINK,
                borderRadius: 10,
              },
              text: {
                color: COLOR.WHITE,
                opacity: 1,
              },
            },
          },
        }}
      />
    </View>
  );
};
export default CustomCalendar;
