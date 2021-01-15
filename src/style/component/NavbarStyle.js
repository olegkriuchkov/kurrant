import {StyleSheet} from 'react-native';
import COLOR from '../../constants/COLOR';

export default StyleSheet.create({
  mainStyle: {
    backgroundColor: COLOR.WHITE,
    shadowOffset: {
      width: 0,
      height: 25,
    },
    justifyContent: 'space-between',
    shadowOpacity: 1,
    shadowRadius: 0,
    flexDirection: 'row',
    elevation: 10,
  },
  container: {
    margin: 10,
    marginBottom: 0,
    marginTop: 15,
    flexDirection: 'column',
    width: '95%',
  },
  noStyle: {height: 70},
  dateContaier: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateText: {flexDirection: 'row', alignItems: 'center'},
  calendarButton: {
    width: 15,
    height: 15,
    marginLeft: 5,
    marginTop: 10,
    transform: [{rotate: '180deg'}],
  },
  activeCalendarButton: {width: 15, height: 15, marginLeft: 5},
  weekdayContainer: {flexDirection: 'row', marginVertical: 15},
  weekdayText: {marginHorizontal: 22, opacity: 0.3},
});
