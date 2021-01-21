import COLOR from '../../constants/COLOR';

export default (selectedColor) => ({
  selectedDayBackgroundColor: selectedColor,
  selectedDayTextColor: COLOR.WHITE,
  todayTextColor: selectedColor,
  dayTextColor: COLOR.BLACK,
  // textDisabledColor: '#d9e1e8',
  // dotColor: '#00adf5',
  // selectedDotColor: '#ffffff',

  monthTextColor: COLOR.WHITE,
  // indicatorColor: 'blue',

  // textDayFontWeight: '300',
  // textMonthFontWeight: 'bold',
  // textDayHeaderFontWeight: '300',

  'stylesheet.calendar-list.main': {
    placeholderText: {
      color: COLOR.PINK,
      fontSize: 18,
    },
    calendar: {
      margin: 0,
      padding: 0,
      marginTop: 30,
      bottom: 65,
    },
    container: {
      paddingLeft: 0,
      paddingRight: 0,
      margin: 0,
      backgroundColor: COLOR.WHITE,
      width: '100%',
      borderColor: COLOR.WHITE,
      borderWidth: 1,
      height: 300,
    },
    week: {
      marginTop: 0,
      marginBottom: 0,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 0,
    },
  },
  'stylesheet.calendar.main': {
    container: {
      paddingLeft: 0,
      paddingRight: 0,
      margin: 0,
      backgroundColor: COLOR.WHITE,
      width: '100%',
      borderColor: COLOR.WHITE,
      borderWidth: 1,
    },
    week: {
      marginTop: 0,
      marginBottom: 0,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 0,
    },
  },
  'stylesheet.calendar.header': {
    header: {
      flexDirection: 'row',
      justifyContent: 'center',
      paddingLeft: 6,
      paddingRight: 6,
      marginTop: 0,
      marginBottom: 0,
      alignItems: 'center',
      position: 'absolute',
      zIndex: -10,
    },
    arrowImage: {
      tintColor: COLOR.WHITE,
    },
  },

  'stylesheet.day.single': {
    base: {
      marginTop: 6,
      width: 35,
      height: 35,
      alignItems: 'center',
    },
    text: {
      fontSize: 20,
      top: 7,
      color: 'black',
      backgroundColor: 'rgba(255, 255, 255, 0)',
    },
    disabledText: {
      opacity: 0.5,
      color: COLOR.BLACK,
    },
  },
  'stylesheet.day.basic': {
    base: {
      width: 42,
      height: 42,
      alignItems: 'center',
      margin: 5,
      borderRadius: 10,
      justifyContent: 'center',
    },
    text: {
      opacity: 0.3,
      fontSize: 16,
      color: COLOR.BLACK,
    },
    selected: {
      color: COLOR.WHITE,
      opacity: 1,
    },
  },
});
