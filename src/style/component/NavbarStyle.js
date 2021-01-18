import {StyleSheet} from 'react-native';
import COLOR from '../../constants/COLOR';

export default StyleSheet.create({
  mainStyle: {
    backgroundColor: COLOR.WHITE,
    justifyContent: 'space-between',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingTop: 20,
  },
  container: {
    margin: 10,
    marginBottom: 0,
    marginTop: 15,
    flexDirection: 'column',
    width: '95%',
  },
  noStyle: {
    height: 70,
    paddingTop: 20,
  },
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
  pop: {
    width: 25,
    height: 17,
    margin: 10,
    marginTop: 35,
  },

  cancel: {
    height: 17,
    margin: 10,
    marginTop: 35,
    color: COLOR.WHITE,
  },
  canelWrapper: {left: 320},

  arrowBack: {
    width: 25,
    height: 17,
    margin: 10,
    marginTop: 35,
  },
  settings: {width: 25, height: 19, margin: 10, marginBottom: 15},
});
