import {StyleSheet} from 'react-native';
import COLOR from '../../constants/COLOR';

export default StyleSheet.create({
  main: {
    height: '100%',
    marginHorizontal: 10,
  },
  daysView: {
    alignItems: 'center',
  },
  lastDayTest: {
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
    height: 350,
    borderRadius: 200,
    backgroundColor: COLOR.PINK,
  },
  days: {
    color: COLOR.WHITE,
    fontSize: 70,
  },
  text: {
    color: COLOR.WHITE,
    fontSize: 20,
  },
  hookupView: {
    alignItems: 'center',
  },
  lastHookup: {
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
    height: 350,
    borderRadius: 20,
    backgroundColor: COLOR.PINK,
  },
  button: {
    position: 'absolute',
    left: '75%',
    top: '85%',
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: COLOR.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  horisontalLine: {width: 30, height: 6, backgroundColor: COLOR.PINK},
  verticalLine: {
    width: 6,
    height: 30,
    position: 'absolute',
    backgroundColor: COLOR.PINK,
  },
});
