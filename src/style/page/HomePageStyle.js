import {StyleSheet} from 'react-native';
import COLOR from '../../constants/COLOR';

export default StyleSheet.create({
  main: {
    height: '100%',
    marginHorizontal: 10,
  },
  splashScreenContainer: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  pinContainer: {
    position: 'absolute',
    zIndex: 5,
    opacity: 0.9,
    width: '100%',
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  horisontalLine: {width: 30, height: 6, backgroundColor: COLOR.PINK},
  verticalLine: {
    width: 6,
    height: 30,
    position: 'absolute',
    backgroundColor: COLOR.PINK,
  },
  modal: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    bottom: 130,
    right: 30,
  },
  modalText: {color: COLOR.DARKPINK, fontSize: 25, fontWeight: '600'},
});
